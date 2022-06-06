import locationsSlice, {
  locationsSliceName,
} from "@/features/locations/LocationsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [locationsSliceName]: locationsSlice,
});

export default rootReducer;
