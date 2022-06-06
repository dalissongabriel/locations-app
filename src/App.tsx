import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

const Locations = React.lazy(() => import("./features/locations/Locations"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="Loading...">
            <Locations />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
