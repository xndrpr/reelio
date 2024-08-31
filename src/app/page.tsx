"use client";

import { useHeader } from "@/hooks/use-header";
import { Header } from "@/shared/components/header";

export default function Home() {
  const header = useHeader();

  return (
    <main>
      <Header header={header} />
    </main>
  );
}
