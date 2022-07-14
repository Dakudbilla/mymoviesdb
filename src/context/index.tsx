import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

interface contextProps {
    isUserLoggedIn: boolean
    signedInUserfavoriteMovies: () => string[]
    addOrRemoveFav: (currentMedia: favMediaProps) => void
    signInWithGoogle: () => void
    signOutGoogle: () => void
    favMedia: favMediaProps[]

}

export interface favMediaProps {
    mediaId: string
    mediaType: string
}


const faveMoviecontext = createContext({} as contextProps)


export const useFaveContext = () => {
    return useContext(faveMoviecontext)
}


export const FavMovieContextProvider = ({ children }: { children: ReactNode }) => {
    const [favMedia, setFavMedia] = useState<favMediaProps[]>([])
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const addOrRemoveFav = (currentMedia: favMediaProps) => {
        if (favMedia.find((media) => media.mediaId === currentMedia.mediaId)) {
            setFavMedia(favMedia.filter((media) => media.mediaId !== currentMedia.mediaId))
        } else {
            setFavMedia([...favMedia, currentMedia])
        }
    }


    const signedInUserfavoriteMovies = (): string[] => {
        return ['1', '2']
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then((res) => {
            setIsUserLoggedIn(Boolean(res.user))

        }).catch((err) => {
            console.log(err)
        })
    }

    const signOutGoogle = () => {
        signOut(auth).then(() => {
            console.log("Sign out succesfully")
            setIsUserLoggedIn(false)
        }).catch((err) => {
            console.log({ "SignOut Fail": err })

        })
    }

    useEffect(() => {
        const addToFirebase = async () => {
            try {
                const docRef = await addDoc(collection(db, "users"), favMedia);
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }, [favMedia]);


    return (
        <faveMoviecontext.Provider value={{ signOutGoogle, signInWithGoogle, addOrRemoveFav, signedInUserfavoriteMovies, isUserLoggedIn, favMedia }}>
            {children}
        </faveMoviecontext.Provider>
    )
}