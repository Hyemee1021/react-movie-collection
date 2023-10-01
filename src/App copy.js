import "./App.css";
import { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { Display } from "./components/Display";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    setMovieList([...movieList, movie]);

    console.log(movieList);
  };
  return (
    <div className="wrapper text-warning bg-dark min-vh-100 ">
      <div className="container">
        {/* title */}
        <div className="row">
          <div className="col">
            <h1 className="mt-5 text-center">Welcome to Movie Collection</h1>
          </div>
        </div>
        <hr />
        {/* search area */}
        {/* search> form */}
        <SearchForm addToMovieList={addToMovieList} />
        {/* card */}
        {/* movie */}
        {/* buttons */}
        {/* card*/}
        <Display movieList={movieList} />
      </div>
    </div>
  );
}

export default App;
