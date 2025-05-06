"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  poster: string;
}
export const SmartPoster = ({ poster }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [poster]);

  return (
    <>
      {loading && (
        <div className="w-[200px] h-[300px] flex justify-center items-center bg-secondary/10 rounded-xl">
          Loading...
        </div>
      )}
      <Image
        className={clsx(["rounded-xl", loading && "hidden"])}
        key={poster}
        width={200}
        height={280}
        src={poster}
        alt="poster"
        priority
        onLoad={() => setLoading(false)}
        blurDataURL={poster}
        loading="eager"
        quality={100}
      />
    </>
  );
};
