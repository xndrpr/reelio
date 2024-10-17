"use client";

import React from "react";
import { FiltersSC } from "./styled";
import { FiltersIcon } from "@/assets/icons/tsx-icons/filters";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Filters = ({ isOpen, setIsOpen }: Props & { isOpen: boolean }) => {
  return (
    <FiltersSC $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <FiltersIcon />
    </FiltersSC>
  );
};
