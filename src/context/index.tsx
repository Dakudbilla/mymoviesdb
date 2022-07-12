import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createContext, ReactNode, useContext, useState } from "react";
import { auth } from "../firebase";


interface contextProps {
    isUserLoggedIn: boolean
    signedInUserfavoriteMovies: () => string[]
    addOrRemoveFav: (movieId: string) => void
    signInWithGoogle: () => void
    favMovies: string[]
}

const faveMoviecontext = createContext({} as contextProps)

export const useFaveContext = () => {
    return useContext(faveMoviecontext)
}
export const FavMovieContextProvider = ({ children }: { children: ReactNode }) => {
    const [favMovies, setFavMovies] = useState<string[]>([])
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
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

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then((res) => {
            console.log(res)
            setIsUserLoggedIn(Boolean(res.user))

        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <faveMoviecontext.Provider value={{ signInWithGoogle, addOrRemoveFav, signedInUserfavoriteMovies, isUserLoggedIn, favMovies }}>
            {children}
        </faveMoviecontext.Provider>
    )
}