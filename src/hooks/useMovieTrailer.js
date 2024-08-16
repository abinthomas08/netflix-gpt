import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/movieSlice"



const useMovieTrailer =(movieid)=>{
    const dispatch = useDispatch();

    const getMovieVideos = async () =>{
        // for putting state variable in store
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos?language=en-US',API_OPTIONS)
        const json = await data.json();
        
        const filteredData = json.results.filter(video=>video.type==="Trailer");
        const trailer =filteredData.length? filteredData[0] :json.results[0]
    
        
        dispatch(addTrailerVideo(trailer)) // put state variable in store using action add TrailerVideo
      }
    useEffect(()=>{
        getMovieVideos();

      },[])

}

export default useMovieTrailer