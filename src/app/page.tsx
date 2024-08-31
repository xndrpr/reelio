"use client";

import { useHeader } from "@/hooks/use-header";
import { Header } from "@/shared/components/header";

export default function Home() {
  const header = useHeader();

  return (
    <main>
      <Header header={header} />
      <div>
        {header.activeTab === 0 && <div>Фильмы</div>}
        {header.activeTab === 1 && <div>Сериалы</div>}
        {header.activeTab === 2 && <div>Аниме</div>}
        {header.activeTab === 3 && <div>Мультфильмы</div>}
      </div>
    </main>
  );
}
