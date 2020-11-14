import React, { Component } from "react";
import movies from "./MovieJSON";
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>In Theaters Now</h1>
        <div className="movie-container">
          {movies.map((movie, index) => {
            return (
              <>
                <div id={"movie-card" + (index + 1)}>
                  <img id={"movie-image" + (index + 1)} src={movie.src} />
                  <div id={"movie-name" + (index + 1)}>{movie.name}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
