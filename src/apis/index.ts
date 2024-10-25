import { $axios } from "@/lib/axios";

export const getPokemonList = async () => {
  const res = await $axios.get(`/`);
  return res.data; // 필요한 데이터 부분을 반환
};

export const getPokemon = async ({ name }: { name: string }) => {
  const res = await $axios.get(`/${name}`);
  return res.data; // 필요한 데이터 부분을 반환
};
