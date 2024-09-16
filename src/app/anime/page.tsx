import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";

export default function AnimePage({
  searchParams,
}: {
  searchParams: {
    offset: number;
  };
}) {
  return (
    <main>
      <Header activeTab={3} />
      <Movies offset={searchParams.offset || 1} type={3} />
    </main>
  );
}
