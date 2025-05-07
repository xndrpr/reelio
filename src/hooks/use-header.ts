import { useState } from "react";

interface Tab {
  title: string;
}

export interface HeaderState {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export function useHeader(): HeaderState {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
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
