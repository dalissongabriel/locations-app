import Addresses from "@/features/Addresses/pages/Addresses";
import { render, screen } from "@/tests/testUtils";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

const { click, type } = userEvent;
const { getByText, getByTestId, getAllByTestId } = screen;

describe("Addresses page", () => {
  it("should show loading state", async () => {
    render(<Addresses />);
    expect(getByText(/loading../i)).toBeDefined();
  });

  it("should render results", async () => {
    render(<Addresses />);
    waitFor(() => {
      expect(getByText(/yolanda little/i)).toBeDefined();
      expect(getByText(/South Tommiemouth/i)).toBeDefined();
    });
  });

  it("should filter results", async () => {
    render(<Addresses />);
    waitFor(async () => {
      await type(getByTestId("search"), "beach");
      expect(getAllByTestId("location-name")).toHaveLength(2);
    });
  });

  it("should show empty list when no results found", async () => {
    render(<Addresses />);
    waitFor(async () => {
      await type(getByTestId("search"), "xxxx");
      expect(getByText(/No results found/i)).toBeDefined();
    });
  });

  it("should filter list by favorites", async () => {
    render(<Addresses />);
    waitFor(async () => {
      await click(getByText(/Show Favorites/i));
      expect(getByText(/no results found/i)).toBeDefined();
      await click(getByText(/Show All/i));
      expect(getAllByTestId("location-name")).toHaveLength(3);
    });
  });
});
