"use client";

import React from "react";
import Logo from "@/assets/logo.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  activeTab: number;
}

export const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = React.useState(searchParams.get("query") || "");

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.length > 0 && !value.startsWith(" ")) {
      console.log(`/search?query=${value}&offset=1`);
      router.push(`/search?query=${value}&offset=1`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full sm:flex-row">
      <button
        className="bg-none outline-none border-none cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Logo />
      </button>
      <div className="flex gap-2 justify-center items-center rounded-2xl w-full h-10 border-2 border-white/20 px-2">
        <SearchIcon />
        <input
          placeholder="Найти фильмы, сериал..."
          className="border-none outline-none w-full h-full"
          onKeyDown={onKeyDown}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};
