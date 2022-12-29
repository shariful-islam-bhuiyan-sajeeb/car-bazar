import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../../Assese/profile.jpg'
import { AuthContext } from '../../Context/authProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleLogOut = () => {
        logOut()
            .then(() => { 
                navigate('/login') })
            
            .catch(err => console.error(err))
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/media">Media</Link></li>
        <li><Link >Message</Link></li>
        <li><Link to="/aboute">About</Link></li>

        {user?.uid ?
            <>
                <li><button onClick={handleLogOut}>Log Out</button></li>
            </> :
            <li><Link to="/login">Login</Link></li>


        }
    </>




    return (
        <div>
            <div className="navbar bg-gray-100 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case md:text-3xl text-lg md:text-left text-center">Car Bazar.com</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl font-bold">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="sm:w-20 w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={profile} alt='/' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;