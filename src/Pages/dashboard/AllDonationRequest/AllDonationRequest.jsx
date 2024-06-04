import useAllDonationRequest from '../../../Hooks/useAllDonationRequest';

const AllDonationRequest = () => {
    const [all_donation_request] = useAllDonationRequest()
    console.log(all_donation_request);
    return (
        <div>
            <h3 className='text-3xl text-center'>All Blood Donation Request : {all_donation_request.length}</h3>

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Recipient Name</th>
                            <th>Recipient location</th>
                            <th>Donation date</th>
                            <th>Donation time</th>
                            <th>Donation status</th>
                            <th>Donor Action</th>
                            <th>Donor information</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            all_donation_request?.map((request, idx) => <tr key={request._id}>
                                <th>{idx + 1}</th>
                                <td>{request.recipient_name}</td>
                                <td>{request.recipient_upazila}, {request.recipient_district}</td>
                                <td>{request.donation_date}</td>
                                <td>{request.donation_time}</td>
                                <td>{request.donation_status}</td>
                                <td>{
                                    request.donation_status === "pending" && <p className='flex gap-2'>
                                        <button className='btn btn-xs btn-accent btn-outline'>Done</button>
                                        <button className='btn btn-xs btn-error btn-outline'>Cancel</button>
                                    </p>
                                }</td>


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default AllDonationRequest;