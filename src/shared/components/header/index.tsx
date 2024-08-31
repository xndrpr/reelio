"use client";

import React, { useState } from "react";
import { CustomTabs, HeaderSC } from "./styled";
import { SearchBar } from "../search-bar";
import { IHeaderState, useHeader } from "@/hooks/use-header";

interface Props {
  header: IHeaderState;
}

export const Header = ({ header }: Props) => {
  return (
    <HeaderSC>
      <CustomTabs
        tabs={header.tabs}
        activeTab={header.activeTab}
        setActiveTab={header.setActiveTab}
      />
      <SearchBar />
    </HeaderSC>
  );
};
