import { RootState } from "@/app/store";
import { fetchListLocations } from "@/features/locations/LocationsService";
import { ILocation } from "@/types/entities";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const locationsSliceName = "locations";
export interface LocationsState {
  query: string;
  list: ILocation[];
  favorites: number[];
  status: "idle" | "loading" | "failed";
}

const initialState: LocationsState = {
  query: "",
  list: [],
  favorites: [],
  status: "idle",
};

export const fetchList = createAsyncThunk(
  `${locationsSliceName}/fetchList`,
  async () => {
    const response = await fetchListLocations();
    return response.data;
  }
);

export const locationsSlice = createSlice({
  name: locationsSliceName,
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = action.payload;
      })
      .addCase(fetchList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectQuery = (state: RootState) => state.locations.query;
export const selectList = (state: RootState) => state.locations.list;
export const selectStatus = (state: RootState) => state.locations.status;
export const selectFavorites = (state: RootState) => state.locations.favorites;

export const selectFilteredResults = (state: RootState) => {
  const query = state.locations.query.toLowerCase();
  return state.locations.list.filter((location) =>
    location.place.toLowerCase().includes(query)
  );
};

export const { setSearchQuery, addFavorite, removeFavorite } =
  locationsSlice.actions;
export default locationsSlice.reducer;
