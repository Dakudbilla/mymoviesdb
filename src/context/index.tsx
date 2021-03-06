import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, addDoc, deleteDoc, doc, query, where, setDoc, getDocs } from "firebase/firestore";
import useLocalStorage from "../hooks/useLocalStorage";


interface contextProps {
    isUserLoggedIn: boolean
    addOrRemoveFav: (currentMedia: favMediaFirestoreProps) => void
    signInWithGoogle: () => void
    signOutGoogle: () => void
    favMedia: favMediaProps[]
    loggedInUser: User

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
    const [isUserLoggedIn, setIsUserLoggedIn] = useLocalStorage<boolean>("isUserLoggedIn", false)
    const [loggedInUser, setLoggedInUser] = useLocalStorage<User>("loggedInUser", {} as User)
    const [removedFavMedia, setRemovedFavMedia] = useState<favMediaFirestoreProps>({} as favMediaFirestoreProps)
    const [addedFavMedia, setAddedFavMedia] = useState<favMediaFirestoreProps>({} as favMediaFirestoreProps)
    const addOrRemoveFav = (currentMedia: favMediaFirestoreProps) => {
        if (favMedia.find((media) => media.mediaId === currentMedia.mediaId)) {
            setRemovedFavMedia(currentMedia)
        } else {
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
                const q = query(favRef, where("mediaId", "==", favTVorMovie.mediaId), where("id", "==", loggedInUser.email));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach(async (qdoc) => {
                    await deleteDoc(doc(db, "favmedia", qdoc.id));
                })
                setRemovedFavMedia({} as favMediaFirestoreProps)
                setFavMedia(favMedia.filter((media) => media.mediaId !== favTVorMovie?.mediaId))
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
                const q = query(favRef, where("id", "==", loggedInUser.email));
                const querySnapshot = await getDocs(q);
                let docs: favMediaFirestoreProps[] = []

                querySnapshot.forEach((doc) => {
                    loggedInUser.email && docs.push({ ...doc.data() as favMediaFirestoreProps })
                })

                ///Remove duplicates from object
                const favMediaIdSet = Array.from(new Set([...favMedia, ...docs].map(a => a.mediaId)))
                let uniqueFavMedia = [] as favMediaFirestoreProps[]
                for (let i = 0; i < favMediaIdSet.length; i++) {
                    const favdata = [...favMedia, ...docs].find(a => a.mediaId === favMediaIdSet[i])
                    if (favdata !== undefined) {
                        uniqueFavMedia = [...uniqueFavMedia, favdata]
                    }

                }

                setFavMedia(uniqueFavMedia)
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }

        isUserLoggedIn && signedInUserfavoriteMovies()

    }, [isUserLoggedIn])

    return (
        <faveMoviecontext.Provider value={{ signOutGoogle, signInWithGoogle, addOrRemoveFav, isUserLoggedIn, favMedia, loggedInUser }}>
            {children}
        </faveMoviecontext.Provider>
    )
}