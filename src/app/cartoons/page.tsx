import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";

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
      <Movies offset={searchParams.offset} type={2} />
    </main>
  );
}
