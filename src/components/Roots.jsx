import { Outlet } from "react-router";
import Navbar from "./Navbar";



const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;