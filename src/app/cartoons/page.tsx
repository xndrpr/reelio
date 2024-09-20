import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";
import { MovieType } from "@/types/movie";

export default function CartoonsPage({
  searchParams,
}: {
  searchParams: {
    offset: string;
  };
}) {
  return (
    <main>
      <Header activeTab={2} />
      <Movies offset={searchParams.offset} type={MovieType.Cartoon} />
    </main>
  );
}
