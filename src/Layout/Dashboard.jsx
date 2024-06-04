import { CgProfile } from "react-icons/cg";
import { FaCalendar, FaEnvelope, FaHome, FaList, FaListAlt, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCableCar } from "react-icons/fa6";
import { MdRequestPage } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    // TODO : get admin value from the database 
    // const [isAdmin] = useAdmin()
    const isAdmin = true
    // console.log(isAdmin);
    const dashboardLinks = <>
        {
            isAdmin ? <>
                <li>
                    <NavLink to={"/dashboard/admin-home"}>
                        <FaHome> </FaHome>
                        Admin Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"/dashboard/add-items"}>
                        <FaUtensils></FaUtensils>
                        Add Item
                    </NavLink>
                </li>


                <li>
                    <NavLink to={"/dashboard/all-users"}>
                        <FaUsers></FaUsers>
                        All Users
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"/dashboard/all-blood-donation-request"}>
                        <FaListAlt></FaListAlt>
                        All Blood Donation Request
                    </NavLink>
                </li>
            </> : <>
                <li>
                    <NavLink to={"/dashboard/user-home"}>
                        <FaHome> </FaHome>
                        User Home
                    </NavLink>
                </li>

                <li>
                    <Link to={"/dashboard/profile"}>
                        <FaCalendar></FaCalendar>
                        Update Profile
                    </Link>
                </li>
            </>
        }
    </>


    const commonLink = <>
        <li>
            <NavLink to={"/dashboard/profile"}>
                <CgProfile></CgProfile>
                Profile
            </NavLink>
        </li>
        <li>
            <NavLink to={"/dashboard/create-donation-request"}>
                <MdRequestPage></MdRequestPage>
                Create Donation Request
            </NavLink>

        </li>
    </>
    return (
        <div className="">
            <div className="navbar-start flex md:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm bg-yellow-500 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            dashboardLinks
                        }


                        {/* nav route  */}
                        <div className="divider"></div>
                        {
                            commonLink
                        }

                        <li>
                            <NavLink to={"/"}>
                                <FaHome> </FaHome>
                                Home
                            </NavLink>
                        </li>


                        <li>
                            <NavLink to={"/order/salads"}>
                                <FaCableCar>   </FaCableCar>
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/order/contact"}>
                                <FaEnvelope></FaEnvelope>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex">
                <div className="w-64 min-h-screen hidden md:flex bg-orange-400">
                    <ul className="menu p-5 space-y-4">
                        {
                            dashboardLinks
                        }

                        {/* nav route  */}
                        <div className="divider"></div>

                        {
                            commonLink
                        }

                        <li>
                            <NavLink to={"/"}>
                                <FaHome> </FaHome>
                                Home
                            </NavLink>
                        </li>


                        <li>
                            <NavLink to={"/order/salads"}>
                                <FaCableCar>   </FaCableCar>
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/order/contact"}>
                                <FaEnvelope></FaEnvelope>
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </div>
                {/* Dashboard content */}
                <div className="flex-1 p-8 mx-auto w-[98%]">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;