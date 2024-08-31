import React, { useCallback, useRef } from "react";
import { SearchContainer, SearchIconSC, SearchInput } from "./styled";
import { SearchIcon } from "@/assets/icons/tsx-icons/search";

export const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput placeholder="Найти фильм или сериал" />
    </SearchContainer>
  );
};
