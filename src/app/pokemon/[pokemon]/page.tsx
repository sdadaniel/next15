import { getPokemon } from "@/apis";
import PoketmonDetail from "./PoketmonDetail";

export default async function Page(props: {
  params: Promise<{ pokemon: string }>;
}) {
  const params = await props.params;
  const info = await getPokemon({ name: params.pokemon });
  return (
    <>
      <PoketmonDetail name={params.pokemon} info={info} />
    </>
  );
}
