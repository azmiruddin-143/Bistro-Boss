import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebaseSetup/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
   
     const [user,setUser] = useState(null)
     const [loader,setLoader] = useState(true)
     
     const registerUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth, email, password)   
     }
     const loginUser = (email,password) =>{
       return signInWithEmailAndPassword(auth, email, password)
     }

      const logout = () =>{
        return signOut(auth)
      }
     

     useEffect(() =>{
        const unsubcribe =  onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
            setLoader(false)
        })

        return() =>{
           return unsubcribe()
        }
           
     },[])

    const authObj = {
        user,
        loader,
        registerUser,
        loginUser,
        logout
    }

    return (
        <div>
            <AuthContext.Provider value={authObj} >
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;