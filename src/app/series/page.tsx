import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";
import { MovieType } from "@/types/movie";

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
      <Movies offset={searchParams.offset} type={MovieType.TV} />
    </main>
  );
}
