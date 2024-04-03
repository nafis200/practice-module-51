import { useContext } from "react";
import { AuthContext } from "./providers/Authprovider";
import { Navigate } from "react-router";



const Privateroute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    if(user){
        return children
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default Privateroute;