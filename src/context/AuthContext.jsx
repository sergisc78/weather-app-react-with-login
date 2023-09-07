import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";




// CREATE CONTEXT PERMET COMPARTIR INFO ENTRE COMPONENTS

export const authContext = createContext()

// HOOK PER IMPORTAR EL CONTEXT A LES PÀGINES

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new error("There is no auth provider")

    return context;
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // FIREBASE REGISTER, LOGIN, LOGOUT I LOGIN WITH GOOGLE

    const singup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const loginWithGoogle = () => {

        const goggleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, goggleProvider);

    }

    // S'EXECUTA AL CARREGAR L'APLICACIÓ. MOSTRA LES DADES DE L'USUARI LOGEJAT
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
    }, [])


    return (
        <authContext.Provider value={{ singup, login, user, logout, loading, loginWithGoogle }}>
            {children}
        </authContext.Provider>
    )
}