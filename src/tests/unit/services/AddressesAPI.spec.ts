import { fetchListAddresses } from "@/features/Addresses/AddressesAPI";
import { describe, expect, it } from "vitest";

describe("Addresses API service", () => {
  it("should be return a response", async () => {
    const response = await fetchListAddresses();
    expect(response.data).to.be.toBeDefined();
    expect(response.data).to.be.length(3);
  });
});
