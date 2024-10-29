import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Page from "./page";

describe("Page", () => {
  let unmount: ReturnType<typeof render>["unmount"];

  beforeEach(() => {
    const renderResult = render(<Page />);
    unmount = renderResult.unmount;
  });

  afterEach(() => {
    unmount();
  });

  it("renders a heading", () => {
    const Home1 = screen.getByRole("heading", { name: "Home1", level: 1 });
    const Home2 = screen.getByRole("heading", { name: "Home2", level: 3 });
    expect(Home2).toBeInTheDocument();
    expect(Home1).not.toHaveStyle({ color: "blue" });
  });
});
