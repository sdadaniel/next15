import { http } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return new Response("Hello world!");
  }),
];
