import locationsReducer from "@/features/locations/LocationsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  locations: locationsReducer,
});

export default rootReducer;
