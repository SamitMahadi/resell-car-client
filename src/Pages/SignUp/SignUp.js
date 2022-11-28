import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import lambo from '../../Assets/Signupcar.png'
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useToken from '../../Hooks/useToken';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateUser, providerLogin } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    const handleLogin = data => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('user created successfully')
                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email,data.role)
                    })
                    .catch(err => console.error(err))

            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)

            })
    }


    const saveUser = (name, email,role) => {
        const user = { name, email,role }
        fetch('https://resell-car-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email);
            })
    }






    return (
        <div>
            <div className="hero mt-16 mb-16">
                <div className="hero-content  flex-col lg:flex-row flex">
                    <img src={lambo} className="lg:w-1/2 rounded-lg  " alt='' />
                    <div className='pl-4'>
                        <div className='p-8 card shadow-xl rounded-lg'>
                            <h2 className='text-3xl text-center'>Sign Up</h2>
                            <form onSubmit={handleSubmit(handleLogin)}>

                                <div className="form-control w-full max-w-xs mb-3">

                                    <label className="label"><span className="label-text">Name</span></label>
                                    <input type="text"{...register("name", {
                                        required: "Name Is Required"
                                    })} className="input input-bordered w-full max-w-xs" />
                                    {errors.name && <p className='text-red-700' role="alert">{errors.name?.message}</p>}


                                </div>


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


                                </div>



                                <div className="form-control w-full max-w-xs">

                                    <select type='select' name="role" className="select select-bordered w-full max-w-xs mt-6 mb-6"{...register("role", {
                                        required: " please select a role",


                                    })}>
                                        <option>Buyer</option>
                                        <option>Seller</option>
                                    </select>



                                    {errors.option && <p className='text-red-700' role="alert">{errors.option?.message}</p>}


                                </div>






                                <input className='btn  bg-red-700 text-white w-full' value="Signup" type="submit" />
                                {signUpError && <p className="text-red-700">{signUpError}</p>}
                            </form>
                            <p className='mt-3'>Already Have An Account? <Link className='text-red-700' to='/login'>Login Now</Link> </p>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full font-uppercase hover: text-white  bg-red-700 ">continue with google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;