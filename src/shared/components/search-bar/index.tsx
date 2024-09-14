import React, { useEffect, useMemo } from "react";
import { ClearButton, SearchContainer, SearchInput } from "./styled";
import { SearchIcon } from "@/assets/icons/tsx-icons/search";
import { useGetSearch } from "@/hooks/api/use-get-search";
import { RotatingLines } from "react-loader-spinner";
import { SearchState } from "@/hooks/use-search";
import { CrossIcon } from "@/assets/icons/tsx-icons/cross-icon";

interface Props {
  state: SearchState;
}

export const SearchBar = ({ state }: Props) => {
  const { isLoading, data } = useGetSearch(state.debouncedQuery);

  useEffect(() => {
    if (data && state.value.length > 0) {
      state.setResult(data);
    }
  }, [data, state]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (state.value.length === 0) {
      state.setResult([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.value]);

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
        placeholder="Найти фильм, сериал, мультфильм, или аниме"
      />
      {state.value.length > 0 && (
        <ClearButton onClick={() => state.setValue("")}>
          <CrossIcon />
        </ClearButton>
      )}
    </SearchContainer>
  );
};
