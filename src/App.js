import "./App.css";
import React, { useState } from "react";
import { movies } from "./data";
import MovieList from "./components/movieList/MovieList";
import Add from "./components/movieAdd/Add";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./components/movieSearch/Search";
import Rating from "./components/rating/Rating";
import Description from "./components/description/Description";
import { Route, Switch } from "react-router-dom";
function App() {
  const [moviesData, setMoviesData] = useState(movies);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const handleAdd = (newMovie) => {
    setMoviesData([...movies, newMovie]);
  };
  return (
    <div className="App">
      <Switch>
         <Route exact path='/'>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Add handleAdd={handleAdd} />
        </Nav>
        <Rating setRating={setRating} rating={rating} />
        <Search setSearch={setSearch} />
      </Navbar>
      <MovieList moviesData={moviesData} search={search} rating={rating} />
      </Route>
      <Route  path="/description/:Id">
        <Description   moviesData={moviesData}/>
      </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
