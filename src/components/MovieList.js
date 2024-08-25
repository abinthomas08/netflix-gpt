// import React from 'react'
// import MovieCard from './MovieCard'

// const MovieList = ({title,movies}) => {
//     console.log(movies)
//   return (
//     <div className='px-6'>
//         <h1 className='text-3xl py-4 text-white'>{title}</h1>
//         <div className='flex overflow-x-scroll scrollbar-hide'>
            
//             <div className='flex'>
//             {movies.map(movie=> <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>)}
//             </div>
//         </div>
        
        
//     </div>
//   )
// }

// export default MovieList


import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies);

    // Ensure `movies` is an array before calling `map`
    const movieList = Array.isArray(movies) ? movies : [];

    return (
        <div className='px-6'>
            <h1 className='text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex'>
                    {movieList.map(movie => (
                        <MovieCard
                            key={movie?.id}
                            posterPath={movie?.poster_path}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList
