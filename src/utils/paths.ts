const basePath = "/portfolio";

export const getBasePath = () => {
  return basePath;
};

export const withBasePath = (path: string) => {
  if (
    path.startsWith("http") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};
