import { useRef, useState, useEffect, useCallback, RefObject } from "react";

/**
 * useInfiniteScroll Hook
 * Manages the infinite scroll logic and drag-to-scroll functionality.
 *
 * @param scrollRef - Ref to the scroll container
 * @param speed - Auto-scroll speed (default: 0.5)
 * @returns - Event handlers and state
 */
const useInfiniteScroll = (
  scrollRef: RefObject<HTMLDivElement | null>,
  speed = 0.5,
) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);
  const scrollTop = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Set initial scroll position to the middle set
    if (scrollContainer.scrollTop === 0) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight / 3;
    }

    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && !isDragging) {
        scrollContainer.scrollTop += speed;
      }

      const oneSetHeight = scrollContainer.scrollHeight / 3;

      // Reset scroll position when reaching the end of the second set (moving down)
      if (scrollContainer.scrollTop >= oneSetHeight * 2) {
        scrollContainer.scrollTop = oneSetHeight;
      }
      // Reset scroll position when reaching the start of the first set (moving up)
      else if (scrollContainer.scrollTop <= 0) {
        scrollContainer.scrollTop = oneSetHeight;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging, speed, scrollRef]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!scrollRef.current) return;
      setIsDragging(true);
      setIsPaused(true);
      startY.current = e.pageY - scrollRef.current.offsetTop;
      scrollTop.current = scrollRef.current.scrollTop;
    },
    [scrollRef],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const y = e.pageY - scrollRef.current.offsetTop;
      const walk = (y - startY.current) * 2; // Scroll-fast
      scrollRef.current.scrollTop = scrollTop.current - walk;
    },
    [isDragging, scrollRef],
  );

  const handleTouchStart = useCallback(() => setIsPaused(true), []);
  const handleTouchEnd = useCallback(() => setIsPaused(false), []);

  return {
    isDragging,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchEnd,
  };
};

export default useInfiniteScroll;
