import { RootState } from "@/app/store";
import homeReducer, {
  addFavorite,
  LocationsState,
  removeFavorite,
  selectFavorites,
  selectFilteredResults,
  selectList,
  selectQuery,
  setSearchQuery,
} from "@/features/Locations/LocationsSlice";
import locationsValidResponse from "@/mocks/data/locationsValidResponse.json";
import { describe, expect, it } from "vitest";

const state: LocationsState = {
  query: "",
  list: [],
  favorites: [],
  status: "idle",
};

describe("Addresses reducers", () => {
  it("should handle initial state", () => {
    const initialState: LocationsState = state;
    const action = { type: "unknown" };
    const expectedState = initialState;
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle setSearchQuery", () => {
    const initialState: LocationsState = { ...state, query: "" };
    const action = setSearchQuery("test");
    const expectedState: LocationsState = { ...state, query: "test" };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle addFavorite", () => {
    const initialState: LocationsState = { ...state, favorites: [] };
    const action = addFavorite(1);
    const expectedState: LocationsState = { ...state, favorites: [1] };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle removeFavorite", () => {
    const initialState: LocationsState = { ...state, favorites: [1] };
    const action = removeFavorite(1);
    const expectedState: LocationsState = { ...state, favorites: [] };
    expect(homeReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("Addresses selectors", () => {
  it("#selectQuery - should return query param when filled", () => {
    const expected = "banana";
    const locations: LocationsState = { ...state, query: expected };
    const result = selectQuery({ locations } as RootState);

    expect(result).to.be.deep.equal(result);
  });

  it("#selectList - should return query param when filled", () => {
    const expected = locationsValidResponse;
    const locations: LocationsState = { ...state, list: expected };
    const result = selectList({ locations } as RootState);

    expect(result).to.be.deep.equal(result);
  });

  it("#selectFavorites return a collection of favorite locations", () => {
    const list = locationsValidResponse;
    const { id: expected } = locationsValidResponse[2];
    const locations: LocationsState = {
      ...state,
      list,
      favorites: [expected],
    };
    const result = selectFavorites({ locations } as RootState);

    expect(result).to.be.deep.equal([expected]);
  });

  it("#selectFilteredResults - return filtered location", () => {
    const list = locationsValidResponse;
    const expected = {
      id: 1,
      name: "Yolanda Little",
      place: "South Tommiemouth",
      distance: 63011,
      price: 1000,
      image:
        "https://a0.muscache.com/im/pictures/be42241a-5346-4745-a2ef-8cf7576f88b8.jpg?im_w=720",
      rating: 23968,
      review: 6294,
    };
    const query = expected.place;

    const locations: LocationsState = {
      ...state,
      list,
      query,
    };
    const result = selectFilteredResults({ locations } as RootState);

    expect(result).to.be.deep.equal([expected]);
  });
});
