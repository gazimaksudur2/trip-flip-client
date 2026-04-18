import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from './FirebaseConfig';
import { GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { api } from '../api/client';

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

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (curUser) => {
            try {
                if (curUser) {
                    await api.post('/jwt', { email: curUser.email });
                } else {
                    await api.post('/logout', {});
                }
            } catch {
                /* cookie / network issues should not block auth state */
            } finally {
                setUser(curUser);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        addNameUrl,
        signIn,
        user, 
        loading,
        setLoading,
        googleSignIn,
        githubSignIn,
        twitterSignIn,
        resetPassword,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;