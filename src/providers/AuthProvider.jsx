import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from './FirebaseConfig';
import { GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const addNameUrl = (name, url)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
        .then(res=>{
            console.log(res,"profile updated!!");
        })
        .catch(error=>{
            console.log(error,"profile not updated!!");
        })
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = ()=>{
        return signInWithPopup(auth, githubProvider);
    }

    const twitterSignIn = ()=>{
        return signInWithPopup(auth, twitterProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, curUser=>{
            setUser(curUser);
            setLoading(false);
            // console.log("from observer: ", curUser);
        })

        return ()=>{
            unsubscribe()
        };
    },[]);

    const authInfo = {
        createUser,
        addNameUrl,
        signIn,
        user, 
        loading,
        setLoading,
        googleSignIn,
        githubSignIn,
        twitterSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;