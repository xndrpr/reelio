"use client";

import React from "react";
import { CustomTabs, HeaderSC, HiddenVersion } from "./styled";
import { SearchBar } from "../search-bar";
import { Tab } from "../tabs";
import { useRouter } from "next/navigation";

interface Props {
  activeTab: number;
}

export const Header = ({ activeTab }: Props) => {
  const router = useRouter();
  const tabs: Tab[] = [
    { title: "Фильмы", isLink: true },
    { title: "Сериалы", isLink: true },
    { title: "Мультфильмы", isLink: true },
    { title: "Аниме", isLink: true },
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

  return (
    <HeaderSC>
      <CustomTabs tabs={tabs} activeTab={tab} setActiveTab={setActiveTab} />
      <SearchBar />
      <HiddenVersion>{process.env.NEXT_PUBLIC_VERSION}</HiddenVersion>
    </HeaderSC>
  );
};
