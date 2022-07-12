import { createContext, ReactNode, useContext, useState } from "react";


interface contextProps {
    isUserLoggedIn: boolean
    signedInUserfavoriteMovies: () => string[]
    addOrRemoveFav: (movieId: string) => void
    favMovies: string[]
}

const faveMoviecontext = createContext({} as contextProps)

export const useFaveContext = () => {
    return useContext(faveMoviecontext)
}
export const FavMovieContextProvider = ({ children }: { children: ReactNode }) => {
    const [favMovies, setFavMovies] = useState<string[]>([])
    const [isUserLoggedIn] = useState(false)
    const addOrRemoveFav = (movieId: string) => {
        if (favMovies.find((movie) => movie === movieId)) {
            setFavMovies(favMovies.filter((movie) => movie !== movieId))
        } else {
            setFavMovies([...favMovies, movieId])
        }
    }

    const signedInUserfavoriteMovies = (): string[] => {
        return ['1', '2']
    }

    return (
        <faveMoviecontext.Provider value={{ addOrRemoveFav, signedInUserfavoriteMovies, isUserLoggedIn, favMovies }}>
            {children}
        </faveMoviecontext.Provider>
    )
}