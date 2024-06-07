import { CgProfile } from "react-icons/cg";
import {  FaEnvelope, FaHome,  FaListAlt, FaUsers, } from "react-icons/fa";
import { FaCableCar } from "react-icons/fa6";
import { MdManageAccounts, MdRequestPage } from "react-icons/md";
import {  NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useVolunteer from "../Hooks/useVolunteer";

const Dashboard = () => {
    // const [isAdmin] = useAdmin()
    const [isVolunteer] = useVolunteer()
    const { user } = useAuth()

    // console.log(user);
    // TODO : get admin value from the database 
    const isAdmin = true
    // const isVolunteer = true
    console.log(isAdmin);
    console.log("admin", isAdmin, "v", isVolunteer);

    const commonLinks = <>
        <li>
            <NavLink to={"/dashboard/create-donation-request"}>
                <MdRequestPage></MdRequestPage>
                Create Donation Request
            </NavLink>

        </li>
        <li>
            <NavLink to={"/dashboard/my-donation-requests"}>
                <FaListAlt></FaListAlt>
                My Donation Request
            </NavLink>

        </li>
        <li>
            <NavLink to={"/dashboard/profile"}>
                <CgProfile></CgProfile>
                Profile
            </NavLink>
        </li>
    </>

    const adminLinks = <>
        <li>
            <NavLink to={"/dashboard/admin-home"}>
                <FaHome> </FaHome>
                Admin Home
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
                All Donation request
            </NavLink>
        </li>
        <li>
            <NavLink to={"/dashboard/content-management"}>
                <MdManageAccounts></MdManageAccounts>
                Content Management
            </NavLink>
        </li>

        {
            commonLinks
        }
    </>

    const volunteerLinks = <>
        <li>
            <NavLink to={"/dashboard/content-management"}>
                <MdManageAccounts></MdManageAccounts>
                Content Management
            </NavLink>
        </li>

        <li>
            <NavLink to={"/dashboard/all-blood-donation-request"}>
                <FaListAlt></FaListAlt>
                All Donation request
            </NavLink>
        </li>

        {
            commonLinks
        }
    </>

    const userLinks = <>
        <li>
            <NavLink to={"/dashboard/user-home"}>
                <FaHome> </FaHome>
                User Home
            </NavLink>
        </li>
        {
            commonLinks
        }
    </>


    const dashboardLinks = <>
        {
            isAdmin ? <>
                {adminLinks}
            </> : isVolunteer ? <>
                {volunteerLinks}
            </> : <>
                {userLinks}
            </>


        }
    </>



    return (
        <div className="">
            <div className="navbar-start flex md:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm bg-lime-500 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {
                            dashboardLinks
                        }


                        {/* nav route  */}
                        <div className="divider"></div>

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
                <div className="hidden  flex-col md:flex w-64 min-h-screen bg-lime-500">
                    <div className="flex justify-center items-center">
                        <img className="w-40 h-40 rounded-full  " src={user.photoURL} alt="" />
                    </div>

                    <ul className="menu p-5 space-y-4">
                        {
                            dashboardLinks
                        }

                        {/* nav route  */}
                        <div className="divider"></div>
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