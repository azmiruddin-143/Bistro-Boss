import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoCartSharp } from "react-icons/io5";
import useCart from '../Shared/useCart';
const Header = () => {

  const { user, logout } = useContext(AuthContext)
  const [cart] = useCart()


  return (
    <div className=''>
      <div className="navbar fixed z-10 md:bg-opacity-30 bg-opacity-70 xl:px-20 2xl:px-44 lg:px-5  text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <Link to={'/'}>Home</Link>
              {/* <Link to={'/'}>Contact Us</Link>
              <Link to={'/'}>Dashboard</Link> */}
              <Link to={'/ourmenu'}>our menu</Link>
              <Link to={'/ourshop'}>our shop</Link>
            </ul>
          </div>
          <a className="btn btn-ghost sm:text-2xl">BISTRO BOSS</a>
        </div>
        {/* <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div> */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu uppercase gap-4 menu-horizontal px-1">
            <Link to={'/'}>Home</Link>
            {/* <Link to={'/'}>Contact Us</Link>
            <Link to={'/'}>Dashboard</Link> */}
            <Link to={'/ourmenu'}>our menu</Link>
            
              <Link to={'/ourshop'}>our shop</Link>
            

            <button className="flex gap-1">
              <IoCartSharp size={20} />
              <div className="badge badge-secondary">+{cart.length}</div>
            </button>
          </ul>

          {
            !user ? <Link to={'signin'} className='pl-5'><button>SIGN IN</button></Link>
              :
              <button className='pl-5' onClick={logout} >LOGOUT</button>
          }

          {
            user && <img className='w-8 rounded-full' src={user?.photoURL} alt="" />
          }
        </div>


        <Link to={'/signin'} className='navbar-end lg:hidden pr-10'><button>SIGN IN</button></Link>

      </div>
    </div>
  );
};

export default Header;