import { getPokemonList } from "@/apis";

export default async function List() {
  const data = await getPokemonList();

  return <div>{JSON.stringify({ data })}</div>;
}
