import addressesReducer from "@/features/Addresses/AddressesSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  addresses: addressesReducer,
});

export default rootReducer;
