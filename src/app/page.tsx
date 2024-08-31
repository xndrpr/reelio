"use client";

import { useState } from "react";
import { CustomTabs, Header } from "./styled";
import { SearchBar } from "@/shared/components/search-bar";

export default function Home() {
  const tabs = ["Фильмы", "Сериалы", "Аниме", "Мультфильмы"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      <Header>
        <CustomTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SearchBar />
      </Header>
    </main>
  );
}
