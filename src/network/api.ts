export const imgBaseURL = "https://image.tmdb.org/t/p/w500"

export const getTrendingMovies=()=>"https://api.themoviedb.org/3/trending/movie/day?api_key=da061aea68de1ab70547833e12285d32"

export const getMovieDetails=(movie_id:string)=>`https://api.themoviedb.org/3/movie/${movie_id}?api_key=da061aea68de1ab70547833e12285d32&language=en-US`

export const getMovieBackDropImage=(imgUrl:string)=>`https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces/${imgUrl}`