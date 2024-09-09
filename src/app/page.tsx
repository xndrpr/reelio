"use client";

import { useHeader } from "@/hooks/use-header";
import { Header } from "@/shared/components/header";
import Movies from "@/components/movies";

export default function Home() {
  const header = useHeader();

  return (
    <main>
      <Header header={header} />
      {header.activeTab === 0 && <Movies type={0} />}
      {header.activeTab === 1 && <Movies type={1} />}
      {header.activeTab === 2 && <Movies type={2} />}
      {header.activeTab === 3 && <Movies type={3} />}
    </main>
  );
}
