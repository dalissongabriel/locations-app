import Addresses from "@/features/Addresses/pages/Addresses";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Addresses />} />
    </Routes>
  );
}

export default App;
