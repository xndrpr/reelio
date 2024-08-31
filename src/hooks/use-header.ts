import { useState } from "react";

export interface IHeaderState {
  tabs: string[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

export function useHeader(): IHeaderState {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Фильмы", "Сериалы", "Аниме", "Мультфильмы"];

  return {
    tabs,
    activeTab,
    setActiveTab,
  }
}