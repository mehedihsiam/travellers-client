import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";


initializeFirebase();
const useContextAPI = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    

    // firebase functionalities    
    const loginWithGoogle = () => {
       return signInWithPopup(auth, googleProvider)
        
    }

    // User observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                
            } else {
            
            }
            });
    },[])
    const logOut = () => {
        signOut()
    }
    const siam = () => {
        console.log('object');
    }

    return {
        user,
        loginWithGoogle,
        logOut,
        siam
    }
}

export default useContextAPI;