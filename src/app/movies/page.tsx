import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";
import { MovieType } from "@/types/movie";

export default function MoviesPage({
  searchParams,
}: {
  searchParams: { offset: string };
}) {
  return (
    <main>
      <Header activeTab={0} />
      <Movies offset={searchParams.offset} type={MovieType.Movie} />
    </main>
  );
}
