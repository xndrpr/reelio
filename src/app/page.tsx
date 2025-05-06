import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";
import { MovieType } from "@/types/movie";

export default function HomePage({
  searchParams,
}: {
  searchParams: { offset: string };
}) {
  return (
    <main>
      <Header />
      <Movies offset={searchParams.offset} type={MovieType.Movie} />
    </main>
  );
}
