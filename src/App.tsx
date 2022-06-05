import Search from "@/components/Search";
import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Search onChangeHandle={handleChange} />
    </div>
  );
}

export default App;
