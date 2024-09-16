import Movies from "@/components/movies";
import { Header } from "@/shared/components/header";

export default function CartoonPage({
  searchParams,
}: {
  searchParams: {
    offset: number;
  };
}) {
  return (
    <main>
      <Header activeTab={2} />
      <Movies offset={searchParams.offset || 1} type={2} />
    </main>
  );
}
