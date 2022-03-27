import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from './axios';
import YouTube from 'react-youtube';
import requests, { IMAGE_URL,API_KEY } from './Requst';

function Row({title ,fetchUrl ,isLargeRow = false}) {
    const [movies,setMovies]=useState([]);
    const [urlId ,setUrlId]=useState("")
    const base_url =IMAGE_URL;

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

   console.log(movies)
   const handleMovie=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
           if(response.data.results.length!==0){
               setUrlId(response.data.results[0])
           }else{
               console.log("triler not avilable")
           }
        })
   }
  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">
            {movies.map(movie=>(
                ((isLargeRow && movie.poster_path)||(!isLargeRow && movie.backdrop_path))&& (
                <img onClick={()=> handleMovie(movie.id)} className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                )
            ))}
            
        </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts}/>}
        
    </div>
  );
}

export default Row;
