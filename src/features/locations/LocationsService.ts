import { httpClient } from "@/infra/HttpClient";
import { ILocation } from "@/types/entities";

export async function fetchListLocations() {
  return await httpClient.get<ILocation[]>("/locations");
}
