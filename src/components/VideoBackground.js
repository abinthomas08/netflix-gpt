import React, { useEffect } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux';


const VideoBackground = ({movieid}) => {
  const trailerVideo =useSelector(store=>store.movies?.trailerVideo); // accessing state variale 
  useMovieTrailer(movieid);
  return (
    <div className='w-screen'>

      <iframe  className= 'w-screen aspect-video'
      autop
     
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+ "?&autoplay=1&mute=1"}
      title="YouTube video player"
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
       ></iframe>
    </div>
  )
}

export default VideoBackground