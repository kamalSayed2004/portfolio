import React from "react";
import Image from "next/image";
import data from "../assets/data";
import { withBasePath } from "@/utils/paths";

const Landscape = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={withBasePath("/imgs/landscapeImg.jpeg")}
          alt="Landscape Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl drop-shadow-lg">
          {data.name}
        </h1>
        <p className="max-w-2xl text-xl font-light md:text-2xl drop-shadow-md">
          {data.title}
        </p>

        {/* Optional decorative element or call to action could go here */}
        <div className="mt-8 h-1 w-24 rounded-full bg-white/80" />
      </div>
    </div>
  );
};

export default Landscape;
