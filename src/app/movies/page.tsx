import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";

export default function MoviesPage({
  searchParams,
}: {
  searchParams: { offset: number };
}) {
  return (
    <main>
      <Header activeTab={0} />
      <Movies offset={searchParams.offset || 1} type={0} />
    </main>
  );
}
