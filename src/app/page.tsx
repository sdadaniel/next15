import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [disabled, setDisabled] = useState<boolean>(false);
  return (
    <div>
      <h1>Home1</h1>
      <h3 style={{ color: "blue" }}>Home2</h3>
      <Link href="/about">About</Link>

      <button
        disabled={disabled}
        onClick={() => {
          setDisabled((p) => !p);
        }}
      >
        Click
      </button>

      <button
        disabled={disabled}
        onClick={() => {
          setDisabled((p) => !p);
        }}
      >
        두번째
      </button>
    </div>
  );
}
