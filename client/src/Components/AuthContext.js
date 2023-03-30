import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({children}) 
 {
 
    const[ user,setUser ]=useState()
    const [change, setOnChange] = useState(false)

    useEffect(()=>{
        fetch("/loggedin",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        }
        )
        .then(res=>res.json())
        .then(response=>{
           setUser (response)
        }
        )
    }, [change])

    const contextData = {
        user
    }

    return (
        <>
         <AuthContext.Provider value={contextData}>
            {children}
         </AuthContext.Provider>
        </>
      )
}

