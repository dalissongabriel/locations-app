import { RootState } from "@/app/store";
import { IAddress } from "@/features/Addresses/types";
import { fetchListAddresses } from "@/features/Addresses/AddressesAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface AddressesState {
  query: string;
  list: IAddress[];
  favorites: number[];
  status: "idle" | "loading" | "failed";
}

const initialState: AddressesState = {
  query: "",
  list: [],
  favorites: [],
  status: "idle",
};

export const fetchList = createAsyncThunk("addresses/fetchList", async () => {
  const response = await fetchListAddresses();
  return response.data;
});

export const addressesSlice = createSlice({
  name: "addresses",
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
      });
  },
});

export const selectQuery = (state: RootState) => state.addresses.query;
export const selectList = (state: RootState) => state.addresses.list;
export const selectAddressesStatus = (state: RootState) =>
  state.addresses.status;
export const selectFavorites = (state: RootState) => state.addresses.favorites;

export const selectFavoritesResults = (state: RootState) => {
  return state.addresses.list.filter((result) =>
    state.addresses.favorites.includes(result.id)
  );
};

export const selectFilteredResults = (state: RootState) => {
  const query = state.addresses.query.toLowerCase();
  return state.addresses.list.filter((address) =>
    address.place.toLowerCase().includes(query)
  );
};

export const { setSearchQuery, addFavorite, removeFavorite } =
  addressesSlice.actions;
export default addressesSlice.reducer;
