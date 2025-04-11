import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "jhankar",
        email : 'at@js.com'
    })

    const authInfo = {
        user,
        setUser
    }
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    
    );
};

export default AuthProvider;