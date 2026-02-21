import {createContext , useContext , useState} from "react";
export const AuthContext= createContext(null);
export function AuthProvider({children}){
//null means no user is logged in
    const [user , setUser] = useState(null); 
    //fake login
    function login(name){
        setUser({name});
    }
    function logout(){
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth(){
    const ctx = useContext(AuthContext);
    if(!ctx){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return ctx;}