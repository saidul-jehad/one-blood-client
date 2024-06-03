
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useState } from 'react';
import { districtsAndUpazilas } from '../../../public/DistrictAndUpazilas'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const Register = () => {
    const [passwordError, setPasswordError] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const { createUser, updateUserProfile, } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()


    // dddddd
    const districts = Object.keys(districtsAndUpazilas);
    const upazilas = selectedDistrict ? districtsAndUpazilas[selectedDistrict] : [];
    /********/

    const onSubmit = async (data) => {
        if (data.password !== data.confirm) {
            setPasswordError("Passwords do not match");
            console.log("Passwords do not match");
            return
        } else {
            setPasswordError("");

            // upload image  in imgbb
            const imageFile = { image: data.avatar[0] }
            const imageRes = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            console.log(imageRes.data);
            if (imageRes.data.success) {

                // create user
                createUser(data.email, data.password)
                    .then(() => {
                        updateUserProfile(data.name, imageRes.data.display_url)
                            .then(() => {
                                // create user entry in the database 
                                const userInfo = {
                                    email: data.email,
                                    name: data.name,
                                    avatar: imageRes.data.data.display_url,
                                    bloodGroup: data.bloodGroup,
                                    district: data.district,
                                    upazila: data.upazila,
                                    password: data.password,
                                    role: "donor",
                                    status: "active"
                                }

                                // console.log(res);
                                axiosPublic.post('/users', userInfo)
                                    .then(res => {
                                        console.log(res.data);
                                        if (res.data?.insertedId) {
                                            console.log("database inserted");
                                            reset()
                                            toast.success("Sign Up Success")
                                            navigate("/")
                                        }
                                    })
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))

            }
        }
    }




    return (
        <>
            <Helmet><title>OneBlood || Sign Up</title></Helmet>
            <div className="hero min-h-screen bg-base-200 pt-20">
                <div className="hero-content flex-col lg:flex-row md:w-3/4 ">

                    <div className="card shrink-0 w-full max-w-sm md:max-w-xl shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold text-center mt-6">Sign Up now!</h1>

                        <form className="card-body" onSubmit={handleSubmit(onSubmit)} >

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {/* name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" name="name" />

                                    {errors.name && <span className='text-red-600' >Name is required</span>}
                                </div>

                                {/* avatar */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Avatar</span>
                                    </label>
                                    <input {...register("avatar", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />

                                    {errors.avatar && <span className='text-red-600' >Avatar is required</span>}
                                </div>

                                {/* Blood group  */}
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text">Blood Group</span>
                                    </label>
                                    <select className='select w-full max-w-xs input-bordered '
                                        defaultValue={"default"}
                                        {...register("bloodGroup", { required: true })}
                                        required>
                                        <option disabled value="default">Select your Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>

                                    {errors.bloodGroup && <span className='text-red-600' >Blood group is required</span>}
                                </div>

                                {/* District*/}
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text">District</span>
                                    </label>
                                    <select className='select w-full max-w-xs input-bordered '
                                        defaultValue={"default"}
                                        {...register('district', {
                                            onChange: (e) => {
                                                setSelectedDistrict(e.target.value);
                                                // setSelectedUpazila("");
                                            },
                                        })}
                                        required>
                                        <option disabled value="default">Select your District</option>
                                        {districts.map((district) => (
                                            <option key={district} value={district}>{district}</option>
                                        ))}
                                    </select>
                                </div>


                                {/* upazila*/}
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text">Upazila</span>
                                    </label>
                                    <select className='select w-full max-w-xs input-bordered '
                                        {...register('upazila')}
                                        defaultValue={"default"}
                                        disabled={!selectedDistrict}
                                        required>
                                        <option disabled value="default">Select your Upazila</option>
                                        {upazilas.map((upazila) => (
                                            <option key={upazila} value={upazila}>{upazila}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" name="email" />

                                    {errors.email && <span className='text-red-600' >Email is required</span>}

                                </div>

                                {/* password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", {

                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                    })} type="password" placeholder="password" className="input input-bordered" name="password" />

                                    {errors.password?.type === "required" && (
                                        <p role="alert" className='text-red-600'>Password is required</p>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <p role="alert" className='text-red-600'>Password must be 6 characters</p>
                                    )}
                                    {errors.password?.type === "maxLength" && (
                                        <p role="alert" className='text-red-600'>Password must be less then 20 characters</p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p role="alert" className='text-red-600'>Password must have one Uppercase, one Lowercase, one Number and one special character.</p>
                                    )}

                                </div>

                                {/* confirm password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input
                                        {...register("confirm", { required: true })}
                                        type="password" placeholder="password" className="input input-bordered" name="confirm" />

                                    {errors.confirm?.type === "required" && (
                                        <p role="alert" className='text-red-600'>Confirm Password is required</p>
                                    )}

                                    {
                                        passwordError && <p className='text-red-600'>{passwordError}</p>
                                    }

                                </div>
                            </div>

                            <div className="form-control">
                                <input className="btn btn-outline text-white bg-[#D1A054]" type="submit" value="Sign Up" />
                            </div>

                            <p className='text-sm text-center text-[#D1A054]'> Already registered ? <Link to={"/login"} className='btn-link text-[#D1A054]'>Go to Login</Link> </p>
                        </form>

                    </div>
                </div >
            </div >
        </>
    );
};

export default Register;