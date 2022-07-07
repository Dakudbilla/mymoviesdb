import axios from "axios"

export const imgBaseURL = "https://image.tmdb.org/t/p/w500"

export const getTrendingMovies= ()=>"https://api.themoviedb.org/3/trending/movie/day?api_key=da061aea68de1ab70547833e12285d32"

export const getPopularMovies=()=>"https://api.themoviedb.org/3/movie/popular?api_key=da061aea68de1ab70547833e12285d32&language=en-US&page=1"

export const getTopRatedMovies=()=>"https://api.themoviedb.org/3/movie/top_rated?api_key=da061aea68de1ab70547833e12285d32&language=en-US&page=1"


export const getMovieDetails=(movie_id:string)=>`https://api.themoviedb.org/3/movie/${movie_id}?api_key=da061aea68de1ab70547833e12285d32&language=en-US`

export const getMovieBackDropImage=(imgUrl:string)=>`https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces/${imgUrl}`

export const getMovieCasts=(movie_id:string)=>`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=da061aea68de1ab70547833e12285d32&language=en-US`

export const getSimilarMovies=(movie_id:string)=>`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=da061aea68de1ab70547833e12285d32&language=en-US&page=1`

export const getTrendingTV=()=>`https://api.themoviedb.org/3/trending/tv/day?api_key=da061aea68de1ab70547833e12285d32`

export const getTopRatedTV=()=>`https://api.themoviedb.org/3/tv/top_rated?api_key=da061aea68de1ab70547833e12285d32&language=en-US&page=1`

export const getSearchedMovies = async(query:string)=> await axios.get( `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=da061aea68de1ab70547833e12285d32&language=en-US&include_adult=false`)

export const getSearchedTV = async(query:string)=> await axios.get( `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=da061aea68de1ab70547833e12285d32&language=en-US&include_adult=false`)