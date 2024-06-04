import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const DonationDetails = () => {
    const donation_request = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const { user } = useAuth()
    const {
        _id,
        requester_name,
        requester_email,
        recipient_name,
        recipient_district,
        recipient_upazila,
        hospital_name,
        address,
        donation_date,
        donation_time,
        request_message,
    } = donation_request

    // console.log(donation_request);

    const handleDonate = async () => {
        const donorInfo = {
            donor_name: user.displayName,
            donor_email: user.email
        }
        axiosSecure.patch(`/donate/${_id}`, donorInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success("Donate Successfull")
                    navigate('/donation-requests')
                }
            })
        console.log("f=donate");
    }


    return (
        <div className="pt-24 mb-7 w-full">

            <div className="mx-auto bg-base-200 w-full md:w-3/4 border-2 p-10">
                <p><span className="text-xl font-medium">Requester Name:</span> {requester_name}</p>
                <p><span className="text-xl font-medium">Requester Email:</span> {requester_email}</p>
                <p><span className="text-xl font-medium">Recipient District:</span> {recipient_district}</p>
                <p><span className="text-xl font-medium">Recipient Upazila:</span> {recipient_upazila}</p>
                <p><span className="text-xl font-medium">Recipient Name:</span> {recipient_name}</p>
                <p><span className="text-xl font-medium">Hospital Name:</span> {hospital_name}</p>
                <p><span className="text-xl font-medium">Address:</span> {address}</p>
                <p><span className="text-xl font-medium">Donation Date:</span> {donation_date}</p>
                <p><span className="text-xl font-medium">Donation Time:</span> {donation_time}</p>
                <p><span className="text-xl font-medium">Request Message:</span> {request_message}</p>

                <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-accent btn-outline w-full mt-10">Donate</button>
            </div>

            <button className="btn" >open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="card-body" onSubmit={handleDonate} method="dialog" >
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>

                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    defaultValue={user?.displayName}
                                    disabled
                                    type="text" placeholder="name"
                                    className="input input-bordered" name="name" />

                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    defaultValue={user?.email}
                                    disabled
                                    type="email" placeholder="email" className="input input-bordered" name="email" />
                            </div>

                            <button onClick={handleDonate} className="btn btn-outline text-white bg-[#D1A054]">Donate</button>

                        </div>

                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default DonationDetails;