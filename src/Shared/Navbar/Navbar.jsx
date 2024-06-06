import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {

    const { user, logout } = useAuth()
    // const [isAdmin] = useAdmin()
    const navigate = useNavigate()
    // const [cart] = useCart()
    // logout user 
    const handleLogout = () => {
        logout()
            .then(() => {

                // console.log(user);
                navigate('/login')
            })
            .catch(error => console.log(error))
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation-requests'>Donation Requests</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

        {/* {
            user && isAdmin && <li><NavLink to='/dashboard/admin-home'>Dashboard</NavLink></li>
        }
        {
            user && !isAdmin && <li><NavLink to='/dashboard/user-home'>Dashboard</NavLink></li>
        } */}
    </>


    return (
        <div className="bg-black bg-opacity-30  text-white fixed z-10 max-w-screen-xl mx-auto navbar shadow-xl rounded-b-xl mb-[50px] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 text-white rounded-box w-52">
                        {
                            navLinks
                        }
                        {
                            user ? <li><Link onClick={handleLogout}>Logout</Link></li> : <li><Link to='/login'>Login</Link></li>
                        }

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> <img className="h-8 w-7 rounded-sm hidden lg:flex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIoHA-5zG2KnleyJfDiEIVoQL84WynX3ea9jEZKeD0tA&s" alt="" />OneBlood</a>
            </div>

            <div className="lg:navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">

                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">


                {
                    user ? <div className="flex  items-center gap-3 md:gap-6 ">
                        <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className="h-14 w-14 rounded-full" src={user.photoURL} alt="" /> <div onClick={handleLogout}><Link className="btn btn-ghost btn-outline hidden md:flex"><span className="text-white">Logout</span></Link></div> </div> :
                        <Link to='/login' className="btn btn-outline hidden md:flex btn-ghost"><span className="text-white">Login</span></Link>
                }
                <Tooltip id="my-tooltip" />
            </div>



        </div>
    );
};

export default Navbar;