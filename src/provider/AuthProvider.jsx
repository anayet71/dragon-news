import { useState } from "react";
import { createContext } from "react";
import app from "../components/firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        user,
        setUser,
        createNewUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;