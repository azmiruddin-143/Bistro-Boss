import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate,} from 'react-router-dom';
const SignIn = () => {

    const { loginUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const fom = location.state?.from?.pathname || "/"
    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLoginForm = (e) => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        console.log(email, password);
        loginUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user);
                navigate(fom,{replace:true})
            })
            // ...

    }

    const verifycoken = (e) => {
        const user_captcha_value = e.target.value

        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }

        else {
            setDisable(true)
        }
    }


    return (
        <div>
            <div class="hero bg-base-200 min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLoginForm} sdub class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={verifycoken} type="text" ref={captchaRef} name='captcha' placeholder="captcha" class="input input-bordered" required />
                                {/* <button onClick={verifycoken} className="btn btn-outline btn-xs">Verify</button> */}
                            </div>

                            <div class="form-control mt-6">
                                <button disabled={disable} class="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <Link to={'/signup'} ><h1>SignUp</h1></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;