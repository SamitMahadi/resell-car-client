import React, { useContext, useState } from 'react';
import lcar from '../../Assets/lcar.png'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, providerLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/'

    if (token) {
        navigate(from, { replace: true })
    }

    const googleProvider = new GoogleAuthProvider()


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(err=>console.error(err))
    }



    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)



            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)



            })
    }




    return (
        <div>
            <div className="hero mt-16 mb-16">
                <div className="hero-content  flex-col lg:flex-row flex justify-between">
                    <img src={lcar} className="lg:w-1/2 rounded-lg  " alt='' />
                    <div className='pl-4'>
                        <div className='p-8 card shadow-xl rounded-lg'>
                            <h2 className='text-3xl text-center'>Login</h2>
                            <form onSubmit={handleSubmit(handleLogin)}>


                                <div className="form-control w-full max-w-xs mb-3">

                                    <label className="label"><span className="label-text">Email</span></label>
                                    <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email Addresss is required" })} />
                                    {errors.email && <p className='text-red-700' role="alert">{errors.email?.message}</p>}
                                </div>

                                <div className="form-control w-full max-w-xs">

                                    <label className="label"><span className="label-text">Password</span></label>
                                    <input type="password" className="input input-bordered w-full max-w-xs"
                                        {...register("password", {

                                            required: "Password is required",
                                            minLength: { value: 6, message: 'password must be 6 charecters or longer' }

                                        })} />
                                    {errors.password && <p className='text-red-700' role="alert">{errors.password?.message}</p>}
                                    <label className="label"><span className="label-text">forget password?</span></label>

                                </div>

                                <input className='btn  bg-red-700 text-white w-full' value="Login" type="submit" />
                                {
                                    loginError && <p className='text-red-700'>{loginError}</p>
                                }
                            </form>
                            <p className='mt-3'>New to Car Zone? <Link className='text-red-700' to='/signup'>Create New Account</Link> </p>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full font-uppercase hover: text-white  bg-red-700 ">continue with google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;