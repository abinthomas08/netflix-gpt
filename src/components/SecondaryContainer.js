import React from 'react'
import {useSelector} from "react-redux"
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(store =>store.movies)
  return (
    

    <div className='bg-black'>
      <div className='-mt-52  pl-12 relative z-20'>
      {movies?.nowPlayingMovies ? (      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />) :
      (<p> 
        No movie si currently playing
      </p>)
      }
      {movies?.nowPlayingMovies ? (      <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />) :
      (<p> 
        No movie si currently playing
      </p>)
      }
      {movies?.nowPlayingMovies ? (      <MovieList title={"Popular"} movies={movies?.popularMovies} />) :
      (<p> 
        No movie si currently playing
      </p>)
      }
      {movies?.nowPlayingMovies ? (      <MovieList title={"Up Coming"} movies={movies?.nowPlayingMovies} />) :
      (<p> 
        No movie si currently playing
      </p>)
      }
      </div>
      {
        /**
         * Movie list - popular
         * Movie List -Now playing
         * movie list- trending
         * movie list - Horror
         */
      }
    </div>
  )
}

export default SecondaryContainer





