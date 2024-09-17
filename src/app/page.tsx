import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";

export default function HomePage({
  searchParams,
}: {
  searchParams: { offset: string };
}) {
  return (
    <main>
      <Header activeTab={0} />
      <Movies offset={searchParams.offset} type={0} />
    </main>
  );
}
