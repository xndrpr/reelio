"use client";

import { Tab } from "@/shared/components/tabs";
import { useState } from "react";

export interface HeaderState {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export function useHeader(): HeaderState {
  const [activeTab, setActiveTab] = useState(0);
  const tabs: Tab[] = [
    { title: "Фильмы" },
    { title: "Сериалы" },
    { title: "Мультфильмы" },
    { title: "Аниме" },
  ];

  return {
    tabs,
    activeTab,
    setActiveTab,
  };
}
