import Locations from "@/features/Locations/Locations";
import { render, screen, waitFor } from "@/tests/testUtils";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

const { click, type } = userEvent;
const { getByText, getByTestId, getAllByTestId } = screen;

describe("Locations use cases", () => {
  it("should show loading state", async () => {
    render(<Locations />);
    expect(getByText(/loading../i)).toBeDefined();
  });

  it("should render results", async () => {
    render(<Locations />);
    waitFor(() => {
      expect(getByText(/yolanda little/i)).toBeDefined();
      expect(getByText(/South Tommiemouth/i)).toBeDefined();
    });
  });

  it("should filter results", async () => {
    render(<Locations />);
    waitFor(async () => {
      await type(getByTestId("search"), "beach");
      expect(getAllByTestId("location-name")).toHaveLength(2);
    });
  });

  it("should show empty list when no results found", async () => {
    render(<Locations />);
    waitFor(async () => {
      await type(getByTestId("search"), "xxxx");
      expect(getByText(/No results found/i)).toBeDefined();
    });
  });

  it("should filter list by favorites", async () => {
    render(<Locations />);
    waitFor(async () => {
      await click(getByText(/Show Favorites/i));
      expect(getByText(/no results found/i)).toBeDefined();
      await click(getByText(/Show All/i));
      expect(getAllByTestId("location-name")).toHaveLength(3);
    });
  });

  it("should mark location as favortive", async () => {
    render(<Locations />);
    waitFor(async () => {
      // user click on heart icon to add location to favorites
      const elements = getAllByTestId("heart-button");
      const [firstFavElem] = elements;
      await click(firstFavElem);

      // on see list of favorites, should be have 1 item
      await click(getByText(/Show Favorites/i));
      expect(getAllByTestId("location-name")).toHaveLength(1);

      // on click again, remove item to favorite locations
      await click(getByText(/Show All/i));
      await click(firstFavElem);
      await click(getByText(/Show Favorites/i));
      expect(getByText(/no results found/i)).toBeDefined();
    });
  });
});
