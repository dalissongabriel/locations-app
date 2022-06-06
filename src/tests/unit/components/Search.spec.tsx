import Search from "@/components/Search";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

describe("Search component", () => {
  it("should be render correctly", async () => {
    const mockFn = vi.fn();
    render(<Search onChangeHandle={mockFn} />);

    const searchEl = screen.getByTestId("search");
    expect(searchEl).toBeDefined();
    await userEvent.type(searchEl, "Test");
    expect(mockFn).toHaveBeenCalled();
  });
});
