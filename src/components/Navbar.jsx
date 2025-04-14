import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center pt-7">
            <div>
                {user && user.email}
            </div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-3 items-center">
                {
                    user && user?.email ? <div> <img className="w-12 rounded-full" src={user.photoURL} alt="" /> 
                    <p>{user.displayName} </p> </div> : <img src={userIcon} alt="" />
                    
                }
                {
                    user && user?.email? <button onClick={logOut} className="btn btn-neutral px-7">LogOut</button> :  <Link to='auth/login' className="btn btn-neutral px-7">Login</Link>
                }
               
            </div>
        </div>
    );
};

export default Navbar;