"use client";

import React, { useEffect } from "react";
import { Poster, SkeletonPoster } from "./styled";

interface Props {
  poster: string;
}
export const SmartPoster = ({ poster }: Props) => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
  }, [poster]);

  return (
    <>
      {loading && <SkeletonPoster>Loading...</SkeletonPoster>}
      <Poster
        key={poster}
        style={{ display: loading ? "none" : "block" }}
        width={200}
        height={280}
        src={poster}
        alt="poster"
        priority
        onLoad={() => setLoading(false)}
        blurDataURL={poster}
        loading="eager"
      />
    </>
  );
};
