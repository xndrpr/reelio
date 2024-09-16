import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";

export default function SeriesPage({
  searchParams,
}: {
  searchParams: {
    offset: string;
  };
}) {
  return (
    <main>
      <Header activeTab={1} />
      <Movies offset={searchParams.offset} type={1} />
    </main>
  );
}
