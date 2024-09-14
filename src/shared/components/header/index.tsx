"use client";

import React, { useState } from "react";
import { CustomTabs, HeaderSC, HiddenVersion } from "./styled";
import { SearchBar } from "../search-bar";
import { HeaderState, useHeader } from "@/hooks/use-header";
import { SearchState } from "@/hooks/use-search";

interface Props {
  headerState: HeaderState;
  searchState: SearchState;
}

export const Header = ({ headerState, searchState }: Props) => {
  return (
    <HeaderSC>
      <CustomTabs
        tabs={headerState.tabs}
        activeTab={headerState.activeTab}
        setActiveTab={headerState.setActiveTab}
      />
      <SearchBar state={searchState} />
      <HiddenVersion>{process.env.NEXT_PUBLIC_VERSION}</HiddenVersion>
    </HeaderSC>
  );
};
