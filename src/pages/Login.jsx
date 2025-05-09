import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext)
    const [error, setError] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);
    
    // console.log(userLogin)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log({ email, password });
        userLogin(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                navigate(location?.state ? location.state : '/')
                form.email.value = ''
                form.password.value = ''
            })
            .catch((err) => {
                setError({...error, login:err.code})
            });
    }
    return (
        <div className=" min-h-screen flex justify-center items-center bg-[#F3F3F3] ">
            <div className="card w-full max-w-sm  shrink-0 py-10 bg-white">
                <h2 className="text-center font-semibold text-2xl py-4">Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" />
                        {
                            error.login &&  <div><a className="text-red-600 font-semibold text-m"> {error.login}</a></div>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button  className="btn btn-neutral mt-4">Login</button>
                        <p className="font-semibold pt-2 text-gray-500 text-center">Already have an account?  <Link className="text-red-500" to='/auth/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;