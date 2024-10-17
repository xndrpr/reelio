"use client";

import React from "react";
import { animated, easings, useTransition } from "@react-spring/web";
import {
  CustomTabs,
  FiltersSC,
  HeaderContent,
  HeaderSC,
  HiddenVersion,
  Search,
} from "./styled";
import { SearchBar } from "../search-bar";
import { Tab } from "../tabs";
import { useRouter } from "next/navigation";
import { Filters } from "../filters";

interface Props {
  activeTab: number;
}

export const Header = ({ activeTab }: Props) => {
  const router = useRouter();
  const tabs: Tab[] = [
    { title: "Фильмы", href: "/movies" },
    { title: "Сериалы", href: "/series" },
    { title: "Мультфильмы", href: "/cartoons" },
    { title: "Аниме", href: "/anime" },
  ];
  const [tab, setTab] = React.useState(activeTab);
  const setActiveTab = async (tab: number) => {
    if (tab === 0) {
      setTab(0);
      await new Promise((resolve) => setTimeout(resolve, 200));
      router.push("/movies");
    }

    if (tab === 1) {
      setTab(1);
      await new Promise((resolve) => setTimeout(resolve, 200));
      router.push("/series");
    }

    if (tab === 2) {
      setTab(2);
      await new Promise((resolve) => setTimeout(resolve, 200));
      router.push("/cartoons");
    }

    if (tab === 3) {
      setTab(3);
      await new Promise((resolve) => setTimeout(resolve, 200));
      router.push("/anime");
    }
  };

  const [isFiltersOpen, setIsFiltersOpen] = React.useState(false);
  const filtersTransition = useTransition<boolean, { opacity: number }>(
    isFiltersOpen,
    {
      from: { opacity: 0, height: "0px" },
      enter: { opacity: 1, height: "120px" },
      leave: { opacity: 0, height: "0px" },
      config: { duration: 200, easing: easings.easeInOutSine },
    }
  );

  return (
    <HeaderSC>
      <HeaderContent>
        <CustomTabs tabs={tabs} activeTab={tab} setActiveTab={setActiveTab} />
        <Search>
          <SearchBar />
          <Filters setIsOpen={setIsFiltersOpen} isOpen={isFiltersOpen} />
        </Search>
        <HiddenVersion>{process.env.NEXT_PUBLIC_VERSION}</HiddenVersion>
      </HeaderContent>

      {filtersTransition(
        (style, item) =>
          item && <FiltersSC style={style}>Filters guys</FiltersSC>
      )}
    </HeaderSC>
  );
};
