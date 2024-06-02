import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';


const Login = () => {

    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';



    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;


        // login user
        login(email, password)
            .then(() => {
                // console.log(result.user);
                toast.success("Login Success")
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Helmet><title>Bistro Boss || Login</title></Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row md:w-3/4">
                    <div className="text-center lg:text-left hidden lg:flex">
                        <img src={'https://www.shutterstock.com/image-vector/volunteers-woman-man-donating-blood-600nw-1740797342.jpg'} alt="" />
                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold text-center mt-6">Login now!</h1>
                        <form className="card-body" onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-2">
                                <input className="btn btn-outline text-white bg-[#D1A054]" type="submit" value="Login" />
                            </div>

                            <p className='text-sm text-center text-[#D1A054]'>New here ? <Link to={"/register"} className='btn-link text-[#D1A054]'>Create a New Account</Link> </p>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;