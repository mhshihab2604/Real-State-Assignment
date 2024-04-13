import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const FirebaseProvider = ({children}) => {
    const [refetchUser,setRefetchUser] = useState(false)
    const [user,setUser]= useState(null)
    const [loading, setLoading] = useState(true)
    console.log(loading);
    // create user
    const createUser = (email, password) => {
            setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const UpdateUserProfile =(name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
          
    }

    // sign in user
    const signInUser = ( email, password) => {
            setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
            setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () =>{
            setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // twitterProvider
    const twitterLogin = () => {
            setLoading(true)
        return signInWithPopup(auth, twitterProvider)
    }

    // logout
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
           setUser(user)
           setLoading(false)
        });
        return () => unsubscribe();
    },[refetchUser])

    const allValues = {
        setUser,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        twitterLogin,
        loading,
        UpdateUserProfile,
        refetchUser,
        setRefetchUser
    }
    return (
       <AuthContext.Provider value={allValues}>
            {children}
       </AuthContext.Provider>
    );
};

export default FirebaseProvider;