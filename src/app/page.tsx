"use client";
import routes from "@/data/routes";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Welcome To MyHompage</h1>
      <Link href={routes.pokemon.list}>목록</Link>
      <h3 data-testid="countNumber">{count}</h3>
      <button
        onClick={() => {
          setCount((p) => p + 1);
        }}
      >
        add
      </button>
      <button
        onClick={async () => {
          await new Promise((resolve) => {
            setTimeout(() => {
              setCount((p) => p - 1);
              resolve("good");
            }, 1000);
          });
        }}
      >
        subtract
      </button>
    </div>
  );
}
