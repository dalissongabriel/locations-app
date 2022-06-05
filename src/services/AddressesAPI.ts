import { api } from "@/services/BaseAPI";

export async function fetchListAddresses() {
  return api.get("/addresses");
}
