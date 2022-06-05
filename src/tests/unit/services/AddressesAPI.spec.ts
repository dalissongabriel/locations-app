import { fetchListAddresses } from "@/services/AddressesAPI";
import { describe, expect, it } from "vitest";

describe("Addresses API service", () => {
  it("should be return a response", async () => {
    const response = await fetchListAddresses();
    expect(response).to.be.toBeDefined();
  });
});
