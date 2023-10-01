import React from "react";
import { SearchForm } from "./components/SearchForm";

const App = () => {
  return (
    <div className="bg-dark bg-gradient text-light">
      <div>
        <h1>Welcome to movie collection</h1>
      </div>
      <SearchForm />
    </div>
  );
};

export default App;
