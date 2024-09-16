"use client";

import React from "react";
import { Poster, SkeletonPoster } from "./styled";

interface Props {
  poster: string;
}
export const SmartPoster = ({ poster }: Props) => {
  const [loading, setLoading] = React.useState(true);
  return (
    <>
      {loading && <SkeletonPoster>Loading...</SkeletonPoster>}
      <Poster
        width={200}
        height={280}
        src={poster}
        alt="poster"
        $isLoading={loading}
        onLoadingComplete={() => setLoading(false)}
      />
    </>
  );
};
