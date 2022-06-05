import { Map } from "@/components/Map";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Map Component", () => {
  it("should be render correctly", () => {
    render(<Map />);
    expect(screen.getByRole("img")).toBeDefined();
  });
});
