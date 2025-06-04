import {createContext, useContext, useEffect, useState, type ReactNode} from "react";
import { CheckAuthStatus, loginUser } from "../helpers/api.comunicator";
type User = {
    name: string;
    email: string;
}
type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login: (email:string,password:string) => Promise<void>;
    signup: (name:string,email:string,password:string) => Promise<void>;
    logout: () => Promise<void>;
}
const AuthContext = createContext<UserAuth|null>(null);

export const AuthProvider = ({children}: {children:ReactNode}) => {
    const [user,setuser] = useState<User | null>(null);
    const [isLoggedIn,setisLoggedIn] = useState(false);

    useEffect(() => {
        //fetch if user cookies are valid then skip login
        async function checkStatus() {
            const data = await CheckAuthStatus();
            if (data){
                setuser({email: data.email , name:data.name});
                setisLoggedIn(true);
            }
        }
        checkStatus();

    },[]);
    const login = async (email:string,password:string) => {
        const data = await loginUser(email,password);
        if (data){
            setuser({email: data.email , name:data.name});
            setisLoggedIn(true);
        }
    }
    const signup = async (name:string,email:string,password:string) => {}
    const logout = async () => {}

    const value = {
        isLoggedIn,
        user,
        login,
        signup,
        logout
    };
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    
};

export const UseAuth = () =>useContext(AuthContext);