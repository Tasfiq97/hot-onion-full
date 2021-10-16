import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { GoogleAuthProvider,getAuth, signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";

initializeAuthentication()
const useFirebase=()=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true)

    const signInGoogle=()=>{
        setLoading(true)
      return  signInWithPopup(auth, provider)
       
        .finally(()=>setLoading(false))
    }
    useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)
        }
        else{
            setUser({})
        }
        setLoading(false)

    })
    },[]);

    const signOutGoogle=()=>{
        setLoading(true)
        signOut(auth)
        .then(()=>{
       setUser({})
        })
        .finally(()=>setLoading(false))
    }
    return {
        user,
        signInGoogle,
        signOutGoogle,
        loading
    }
}
export default useFirebase;

