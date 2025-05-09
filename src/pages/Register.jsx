import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        // Get form data
        const form = new FormData(e.target)
        const name = form.get("name")
        if (name.length < 5) {
            setError({ ...error, name: 'Must be more than 5 character long' })
        }
        const email = form.get("email")
        const password = form.get("password")
        const photo = form.get("photo")
        console.log(name, email, password, photo)

        createNewUser(email, password).then((result) => {
            const user = result.user
            setUser(user)
            updateUserProfile({ displayName: name, photoURL: photo })
                .then(() => {
                    navigate('/')
                })
                .catch(err => {
                    console.log(err);
                    
                })
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

                // ..
            });
    }

    return (
        <div className=" min-h-screen flex justify-center items-center bg-[#F3F3F3] ">
            <div className="card w-full max-w-sm  shrink-0 py-10 bg-white">
                <h2 className="text-center font-semibold text-2xl py-4">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Name</label>
                        <input name="name" type="text" className="input" placeholder="Name" />
                        {
                            error.name && <label className="text-red-600">{error.name}</label>
                        }
                        <label className="fieldset-label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" />

                        <label className="fieldset-label">Photo</label>
                        <input name="photo" type="text" className="input" placeholder="Photo URL" />

                        <label className="fieldset-label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className="font-semibold pt-2 text-gray-500 text-center">Already have an account?  <Link to='/auth/login'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;