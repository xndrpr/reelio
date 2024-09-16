import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";

export default function SeriesPage({
  searchParams,
}: {
  searchParams: {
    offset: number;
  };
}) {
  return (
    <main>
      <Header activeTab={1} />
      <Movies offset={searchParams.offset || 1} type={1} />
    </main>
  );
}
