import { ILocation } from "@/domain/entities";
import { api } from "@/services/BaseAPI";

export async function fetchListLocations() {
  return await api.get<ILocation[]>("/locations");
}
