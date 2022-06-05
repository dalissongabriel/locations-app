import { Route, Routes } from "react-router-dom";
import Locations from "./features/Locations/Locations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Locations />} />
    </Routes>
  );
}

export default App;
