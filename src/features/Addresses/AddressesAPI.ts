import { IAddress } from "@/features/Addresses/types";
import { api } from "@/services/BaseAPI";

export async function fetchListAddresses() {
  return await api.get<IAddress[]>("/addresses");
}
