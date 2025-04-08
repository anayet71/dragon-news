import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className=" min-h-screen flex justify-center items-center bg-[#F3F3F3] ">
            <div className="card w-full max-w-sm  shrink-0 py-10 bg-white">
                <h2 className="text-center font-semibold text-2xl py-4">Register your account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className="font-semibold pt-2 text-gray-500 text-center">Already have an account?  <Link to='/auth/login'>Login</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;