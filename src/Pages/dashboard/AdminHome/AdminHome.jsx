import { FaBook, FaBus, FaDollarSign, FaUsers } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const AdminHome = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })


    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : "Back!"
                }
            </h2>


            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className='text-3xl'></FaUsers>
                    </div>
                    <div className="stat-title">Total User</div>
                    <div className="stat-value">{stats.users}</div>
                    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl"></FaUsers>
                    </div>
                    <div className="stat-title"> Users</div>
                    <div className="stat-value">{"15"}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaBook className="text-3xl"></FaBook>
                    </div>
                    <div className="stat-title">Total Blood Donation request</div>
                    <div className="stat-value">{stats.requests}</div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>

           

            </div>
        </div>
    );
};

export default AdminHome;