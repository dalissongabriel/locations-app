import locationsReducer from "@/features/Locations/LocationsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  locations: locationsReducer,
});

export default rootReducer;
