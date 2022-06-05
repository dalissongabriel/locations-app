import { Route, Routes } from "react-router-dom";
import Locations from "./features/locations/Locations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Locations />} />
    </Routes>
  );
}

export default App;
