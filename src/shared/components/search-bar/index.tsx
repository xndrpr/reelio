"use client";

import React from "react";
import { ClearButton, SearchContainer, SearchInput } from "./styled";
import { CrossIcon } from "@/assets/icons/tsx-icons/cross-icon";
import { useRouter, useSearchParams } from "next/navigation";

export const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = React.useState(searchParams.get("query") || "");

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.length > 0 && !value.startsWith(" ")) {
      router.push(`/search?query=${value}&offset=1`);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Найти фильм, сериал, мультфильм, или аниме"
        onKeyDown={onKeyDown}
      />
      {value.length > 0 && (
        <ClearButton
          onClick={() => {
            setValue("");
            router.push(`/`);
          }}
        >
          <CrossIcon />
        </ClearButton>
      )}
    </SearchContainer>
  );
};
