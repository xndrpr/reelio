import { Tab } from "@/shared/components/tabs";
import { useState } from "react";

export interface IHeaderState {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export function useHeader(): IHeaderState {
  const [activeTab, setActiveTab] = useState(0);
  const tabs: Tab[] = [
    { title: "Фильмы" },
    { title: "Сериалы" },
    { title: "Аниме" },
    { title: "Мультфильмы" },
  ];

  return {
    tabs,
    activeTab,
    setActiveTab,
  };
}
