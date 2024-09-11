import { Home } from "./home";

export default function HomePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  console.log(searchParams);
  return <Home />;
}
