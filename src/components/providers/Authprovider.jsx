import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/Firebase.config";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

const Authprovider = ({children}) => {

    const [user,setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password)
         setLoading(true);
    }

    const signInUser = (email,password) =>{
         return signInWithEmailAndPassword(auth,email,password)
         setLoading(true)
    }
 
    const logOut = ()=>{
        setLoading(true)
         return signOut(auth);
    }

    const signIngoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }


    useEffect(()=>{
        const unSubscrive = onAuthStateChanged(auth, currentUser=>{
              setUser(currentUser)
              setLoading(false)
              console.log('observing current user inside useEffect', currentUser);
         })
         return ()=>{
             unSubscrive()
         }
    },[])

    const authInfo = {user,createUser,signInUser,logOut,loading,signIngoogle}
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;