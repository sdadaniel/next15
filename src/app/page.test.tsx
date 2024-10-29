import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe } from "node:test";
import Page from "./page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);
    const Home1 = screen.getByRole("heading", {
      name: "Welcome To MyHompage",
      level: 1,
    });
    expect(Home1).toBeInTheDocument();
  });

  it("renders the count heading", () => {
    render(<Page />);
    const countHeading = screen.getByRole("heading", { level: 3 });
    expect(countHeading).toBeInTheDocument();
    expect(countHeading).toHaveTextContent("0");
  });

  it("increments the count when the add button is clicked", async () => {
    render(<Page />);
    const subtractButton = screen.getByRole("button", { name: "subtract" });
    const countHeading = screen.getByTestId("countNumber");

    fireEvent.click(subtractButton);
    // 비동기 작업이 완료될 때까지 기다림
    await waitFor(() => {
      expect(countHeading).toHaveTextContent("0");
    });
  });

  it("does not decrement the count below zero", async () => {
    render(<Page />);
    const subtractButton = screen.getByRole("button", { name: "subtract" });
    const countHeading = screen.getByTestId("countNumber");

    fireEvent.click(subtractButton);
    await waitFor(() => {
      expect(countHeading).toHaveTextContent("0");
    });
  });
});
