import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";
import { MovieType } from "@/types/movie";

export default function AnimePage({
  searchParams,
}: {
  searchParams: {
    offset: string;
  };
}) {
  return (
    <main>
      <Header activeTab={3} />
      <Movies offset={searchParams.offset} type={MovieType.Anime} />
    </main>
  );
}
