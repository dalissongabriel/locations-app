import Location from "@/features/Locations/Location";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("Location component", () => {
  it("should be render correctly location not fav", () => {
    const mockOnClickHandle = vi.fn();
    render(
      <Location
        image="https://dummyimage.com/520x380/000/fff"
        isFavorite={false}
        name="Placement name"
        onCLickHandle={mockOnClickHandle}
        price={200}
        title="Top placement"
      />
    );
    expect(screen.getByTestId("location-card")).toBeDefined();
  });

  it("should be render correctly location as fav", () => {
    const mockOnClickHandle = vi.fn();
    render(
      <Location
        image="https://dummyimage.com/520x380/000/fff"
        isFavorite={true}
        name="Placement name"
        onCLickHandle={mockOnClickHandle}
        price={200}
        title="Top placement"
      />
    );
    expect(screen.getByTestId("location-card")).toBeDefined();
  });
});
