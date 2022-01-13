import React, { useState, useEffect } from "react";
import '../App.css';
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7cafa973"

const App =() => {
  const [loading, setLoading] = useState(true);   //読み込みの状態を処理
  const [movies, setMovies] = useState([]);       //serverからgetしたmovieを処理
  const [errorMessage, setErrorMessage] = useState(null);   // API requestのerror stateを処理

  // useEffectの第二引数を[](empty array) => only first rendering, first function（now "fetch"）を実行。
  useEffect(() => {
    fetch(MOVIE_API_URL)    // fetching URL only first rendering 
      .then(response => response.json())  // if success, response convert
      .then(jsonResponse => {
        console.log(jsonResponse);
        setMovies(jsonResponse.Search); 
        setLoading(false);
      })
      .catch(error => {                   // if failure
        console.log("MOVIE情報の取得に失敗しました")
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .thne(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      })
  }


  return (
    <div className="App">
      <Header text="HOOKED" />
      <Search search={search} />
      <p className="App-intro">Shareing a few of our favorite movies!</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  )
}

export default App;



