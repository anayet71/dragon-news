import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center pt-7">
            <div>

            </div>
            <div className="nav space-x-5">
        <Link to='/'>Home</Link>
        <Link to='/career'>Career</Link>
        <Link to ='/about'>About</Link>
            </div>
            <div className="login flex gap-3 items-center">
                <img src={userIcon} alt="" />
                <button className="btn btn-neutral px-7">Login</button>
            </div>
        </div>
    );
};

export default Navbar;