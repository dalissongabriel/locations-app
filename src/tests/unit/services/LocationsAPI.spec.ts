import { fetchListLocations } from "@/features/locations/LocaltionsAPI";
import locationsValidResponse from "@/mocks/data/locationsValidResponse.json";
import { describe, expect, it } from "vitest";

describe("Locations API service", () => {
  it("should be return a response", async () => {
    const response = await fetchListLocations();
    expect(response.data).to.be.toBeDefined();
    expect(response.data).to.be.length(locationsValidResponse.length);
  });
});
