import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, addDoc, deleteDoc, doc, query, where, setDoc, getDocs } from "firebase/firestore";


interface contextProps {
    isUserLoggedIn: boolean
    addOrRemoveFav: (currentMedia: favMediaFirestoreProps) => void
    signInWithGoogle: () => void
    signOutGoogle: () => void
    favMedia: favMediaProps[]

}

export interface favMediaProps {
    mediaId: string
    mediaType: string
    // id?: string
}

interface favMediaFirestoreProps {
    mediaId: string
    mediaType: string
    id?: string
}

interface User {
    displayName: string | null
    email: string | null
}

const faveMoviecontext = createContext({} as contextProps)


export const useFaveContext = () => {
    return useContext(faveMoviecontext)
}


export const FavMovieContextProvider = ({ children }: { children: ReactNode }) => {
    const [favMedia, setFavMedia] = useState<favMediaFirestoreProps[]>([])
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState<User>({} as User)
    const [removedFavMedia, setRemovedFavMedia] = useState<favMediaFirestoreProps>({} as favMediaFirestoreProps)
    const [addedFavMedia, setAddedFavMedia] = useState<favMediaFirestoreProps>({} as favMediaFirestoreProps)
    const addOrRemoveFav = (currentMedia: favMediaFirestoreProps) => {
        if (favMedia.find((media) => media.mediaId === currentMedia.mediaId)) {
            console.log(currentMedia)
            setRemovedFavMedia(currentMedia)
        } else {
            console.log("add")
            setAddedFavMedia(currentMedia)
        }
    }




    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then((res) => {
            setIsUserLoggedIn(Boolean(res.user))
            setLoggedInUser({ displayName: res.user.displayName, email: res.user.email })

        }).catch((err) => {
            console.log(err)
        })
    }

    const signOutGoogle = () => {
        signOut(auth).then(() => {
            console.log("Sign out succesfully")
            setIsUserLoggedIn(false)
            setLoggedInUser({} as User)
            setFavMedia([])
        }).catch((err) => {
            console.log({ "SignOut Fail": err })

        })
    }

    useEffect(() => {
        const addToFirebase = async (favTVorMovie: favMediaProps) => {
            try {
                loggedInUser.email && setFavMedia([...favMedia, { ...addedFavMedia, id: loggedInUser.email }])
                console.log("Onnnn")
                loggedInUser.email && await addDoc(collection(db, "favmedia"), { ...addedFavMedia, id: loggedInUser.email })
                setAddedFavMedia({} as favMediaFirestoreProps)

            } catch (e) {
                setFavMedia(favMedia.filter((media) => media.mediaId !== favTVorMovie?.mediaId))
                console.error("Error adding document: ", e);
            }
        }

        const removeFromFirebase = async (favTVorMovie: favMediaProps) => {
            try {
                const favRef = collection(db, "favmedia");
                const q = query(favRef, where("mediaId", "==", favTVorMovie.mediaId));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach(async (qdoc) => {
                    await deleteDoc(doc(db, "favmedia", qdoc.id));
                })
                setRemovedFavMedia({} as favMediaFirestoreProps)
                setFavMedia(favMedia.filter((media) => media.mediaId !== favTVorMovie?.mediaId))
                console.log(favMedia)
            } catch (e) {
                setFavMedia([...favMedia, removedFavMedia])
                console.error("Error removing document: ", e);
            }
        }



        if (Object.keys(addedFavMedia).length) {
            addToFirebase(addedFavMedia)
        }
        if (Object.keys(removedFavMedia).length) {
            removeFromFirebase(removedFavMedia)
        }


    }, [removedFavMedia, addedFavMedia]);

    useEffect(() => {
        const signedInUserfavoriteMovies = async () => {
            try {
                const favRef = collection(db, "favmedia");
                const q = query(favRef, where("email", "==", loggedInUser.email));
                const querySnapshot = await getDocs(q);
                let docs: favMediaFirestoreProps[] = []

                querySnapshot.forEach((doc) => {
                    loggedInUser.email && docs.push({ ...doc.data() as favMediaFirestoreProps })
                })

                setFavMedia([...favMedia, ...docs])


            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

        isUserLoggedIn && signedInUserfavoriteMovies()

    }, [isUserLoggedIn])

    return (
        <faveMoviecontext.Provider value={{ signOutGoogle, signInWithGoogle, addOrRemoveFav, isUserLoggedIn, favMedia }}>
            {children}
        </faveMoviecontext.Provider>
    )
}