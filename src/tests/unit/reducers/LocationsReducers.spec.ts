import homeReducer, {
  addFavorite,
  LocationsState,
  removeFavorite,
  setSearchQuery,
} from "@/features/locations/LocationsSlice";
import { describe, expect, it } from "vitest";

const state: LocationsState = {
  query: "",
  list: [],
  favorites: [],
  status: "idle",
};

describe("Locations reducers", () => {
  it("#initialState - should handle initial state", () => {
    const initialState: LocationsState = state;
    const action = { type: "unknown" };
    const expectedState = initialState;
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("#setSearchQuery - should handle setSearchQuery", () => {
    const initialState: LocationsState = { ...state, query: "" };
    const action = setSearchQuery("test");
    const expectedState: LocationsState = { ...state, query: "test" };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("#addFavorite - should handle addFavorite", () => {
    const initialState: LocationsState = { ...state, favorites: [] };
    const action = addFavorite(1);
    const expectedState: LocationsState = { ...state, favorites: [1] };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("#removeFavorite - should handle removeFavorite", () => {
    const initialState: LocationsState = { ...state, favorites: [1] };
    const action = removeFavorite(1);
    const expectedState: LocationsState = { ...state, favorites: [] };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });
});
