import { SearchIcon } from "@/components/SearchIcon";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SearchIcon Component", () => {
  it("should be render correctly", () => {
    render(<SearchIcon />);
    expect(screen.getByRole("img")).toBeDefined();
  });
});
