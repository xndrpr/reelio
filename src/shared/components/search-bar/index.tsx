import React, { useEffect } from "react";
import { SearchContainer, SearchInput } from "./styled";
import { SearchIcon } from "@/assets/icons/tsx-icons/search";
import { useGetSearch } from "@/hooks/api/use-get-search";
import { RotatingLines } from "react-loader-spinner";
import { SearchState } from "@/hooks/use-search";

interface Props {
  state: SearchState;
}

export const SearchBar = ({ state }: Props) => {
  const { isLoading, data } = useGetSearch(state.debouncedQuery);

  useEffect(() => {
    if (data) {
      state.setResult(data);
    } else {
      state.setResult([]);
    }
  }, [data, state]);

  useEffect(() => {
    state.setIsLoading(isLoading);
  }, [isLoading, state]);

  return (
    <SearchContainer>
      {isLoading ? (
        <RotatingLines width="15px" strokeColor="#fff" />
      ) : (
        <SearchIcon />
      )}
      <SearchInput
        value={state.value}
        onChange={(e) => state.setValue(e.target.value)}
        placeholder="Найти фильм или сериал"
      />
    </SearchContainer>
  );
};
