import React from "react";

// IRONMANのサムネイル画像(デフォルトの画像とする)
const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

// 親componentからmovieを受け取り、Movie componentをレンダリング
const Movie = ({ movie }) => {
  const poster  = 
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className = "movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}  //画像の挿入
          />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
