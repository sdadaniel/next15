"use client";

import { ErrorProps } from "@/type/common";
export default function Error(props: ErrorProps) {
  return (
    <div>
      <h1>오류가 발생했습니다.</h1>
      <h2>{props.error.message}</h2>
    </div>
  );
}
