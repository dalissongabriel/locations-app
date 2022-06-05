import { HeartIcon } from "@/components/HeartIcon";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Map Component", () => {
  it("should be render correctly", () => {
    render(<HeartIcon />);
    expect(screen.getByRole("img")).toBeDefined();
  });
});
