import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/Firebase.config";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext(null);

const Authprovider = ({children}) => {

    const [user,setUser] = useState()

    const createUser = (email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
         return signInWithEmailAndPassword(auth,email,password)
    }
 
    const logOut = ()=>{
         return signOut(auth);
    }


    useEffect(()=>{
        const unSubscrive = onAuthStateChanged(auth, currentUser=>{
              setUser(currentUser)
              console.log('observing current user inside useEffect', currentUser);
         })
         return ()=>{
             unSubscrive()
         }
    },[])

    const authInfo = {user,createUser,signInUser,logOut}
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;