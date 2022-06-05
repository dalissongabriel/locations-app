import homeReducer, {
  addFavorite,
  AddressesState,
  removeFavorite,
  setSearchQuery,
} from "@/features/Addresses/AddressesSlice";
import { describe, expect, it } from "vitest";

describe("Addresses reducer", () => {
  const state: AddressesState = {
    query: "",
    list: [],
    favorites: [],
    status: "idle",
  };
  it("should handle initial state", () => {
    const initialState: AddressesState = state;
    const action = { type: "unknown" };
    const expectedState = initialState;
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle setSearchQuery", () => {
    const initialState: AddressesState = { ...state, query: "" };
    const action = setSearchQuery("test");
    const expectedState: AddressesState = { ...state, query: "test" };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle addFavorite", () => {
    const initialState: AddressesState = { ...state, favorites: [] };
    const action = addFavorite(1);
    const expectedState: AddressesState = { ...state, favorites: [1] };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle removeFavorite", () => {
    const initialState: AddressesState = { ...state, favorites: [1] };
    const action = removeFavorite(1);
    const expectedState: AddressesState = { ...state, favorites: [] };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });
});
