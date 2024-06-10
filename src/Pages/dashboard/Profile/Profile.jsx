
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { districtsAndUpazilas } from '../../../../public/DistrictAndUpazilas'
import useAuth from '../../../Hooks/useAuth';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const Profile = () => {
    const user = useLoaderData()
    const [isDisable, setIsDisable] = useState(true)

    const [selectedDistrict, setSelectedDistrict] = useState("");
    const navigae = useNavigate()
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()


    // 
    const districts = Object.keys(districtsAndUpazilas);
    const upazilas = selectedDistrict ? districtsAndUpazilas[selectedDistrict] : [];
    // 

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            bloodGroup: data.bloodGroup,
            district: data.district,
            upazila: data.upazila,

        }
        axiosSecure.patch(`/update-user/${user?._id}`, userInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success("user Updated")
                    setIsDisable(true)
                }
            })
    }


    return (
        <div className="flex justify-center flex-col items-center">
            <div className="hero min-h-screen bg-base-200s">
                <div className="hero-content flex-col lg:flex-row md:w-3/4 ">

                    <div className="card shrink-0 w-full max-w-sm md:max-w-xl shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold text-center mt-6">Profile</h1>

                        <div className='flex items-center justify-center mt-5'>
                            <img className='w-40 h-40 rounded-full ' src={user?.avatar} alt="" />

                        </div>
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)} >

                            {
                                isDisable && <p onClick={() => setIsDisable(!isDisable)} className='btn btn-accent btn-outline'>Edit Information</p>
                            }
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {/* name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("name",)}
                                        defaultValue={user?.name}
                                        disabled={isDisable}
                                        type="text" placeholder="name" className="input input-bordered" name="name" required />

                                    {errors.name && <span className='text-red-600' >Name is required</span>}
                                </div>

                                {/* Blood group  */}
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text">Blood Group</span>
                                    </label>
                                    <select className='select w-full max-w-xs input-bordered '
                                        defaultValue={user?.bloodGroup}
                                        disabled={isDisable}
                                        {...register("bloodGroup",)}

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
                                        defaultValue={user?.district}
                                        disabled={isDisable}
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
                                        defaultValue={user?.upazila}
                                        disabled={isDisable}
                                        required>
                                        <option defaultValue={user?.upazila}>Select your Upazila</option>
                                        {upazilas.map((upazila) => (
                                            <option key={upazila} value={upazila}>{upazila}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    defaultValue={user?.email}
                                    disabled
                                    {...register("email",)} type="email" placeholder="email"
                                    className="input input-bordered w-full " name="email" />

                                {errors.email && <span className='text-red-600' >Email is required</span>}

                            </div>
                            {
                                !isDisable && <div className="form-control">
                                    <input className="btn btn-outline text-white bg-[#D1A054]" type="submit" value="Update " />
                                </div>
                            }

                        </form>

                    </div>
                </div >
            </div >
        </div>
    );
};

export default Profile;