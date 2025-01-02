import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const {registerUser} = useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data)
        registerUser(data.email,data.password)
        .then((result) =>{
           const logedUser = result.user
           console.log(logedUser);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' {...register("name", { required: true, minLength: 3 })} placeholder="Enter your name" className="input input-bordered" />
                            {errors.name && <span className='text-red-800 pt-3'>Your Name 3 carektar must</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered" />
                            {errors.email && <span className='text-red-800 pt-3'>email is rewure</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' {...register("password", { required: true, minLength: 6, maxLength: 20,
                            pattern:  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%!]).+$/ 
                             })} placeholder="Enter your password" className="input input-bordered" />

                            {errors.password?.type === "required" && (<p className='text-red-800 pt-3'>password is required</p>)}
                            {errors.password?.type === "minLength" && (<p className='text-red-800 pt-3'>6 ba tar besi</p>)}
                            {errors.password?.type === "maxLength" && (<p className='text-red-800 pt-3'>20 er besi hobe na</p>)}
                            {errors.password?.type === "pattern" && (<p className='text-red-800 pt-3'>A a 5 @ agula thakte hobe passeord er modde</p>)}

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                    <Link to={'/signin'} ><h1>Signin</h1></Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;