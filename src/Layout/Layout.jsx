import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/slices/authSlice'
import Profile from '../Components/Profile/Profile'

const menus = [
  { label: 'Home', to: '/' },
  { label: 'Images', to: '/Images' },
  { label: 'Login', to: '/Login' },
]

function Layout({ children }) {
  const [popup, setPopUp] = useState(false);
  const [animate, setAnimate] = useState(null);
  
  const auth = useSelector((res) => res.authSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ReturnToHome = () => {
    dispatch(logout());
    navigate('/Login');
  }

  const handlePopup = () => {
    if (popup) {
      setAnimate("animate__animated animate__heartBeat");
      setTimeout(() => {
        setPopUp(false);
      }, 500);
    } else {
      setAnimate("animate__animated animate__flipInY");
      setPopUp(true);
    }
  }

  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-around items-center bg-slate-900">
        <h1 className="text-white text-2xl font-semibold">
          Redux
        </h1>
        <ul className="flex">
          {menus.map((item) => {
            // Hide 'Login' from the menu if the user is authenticated
            if (auth.user && item.to === '/Login') return null;
            return (
              <li className="p-6 text-white hover:bg-indigo-600" key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            );
          })}
          {auth.user && (
            <li className="relative flex items-center">
              <button onClick={handlePopup} className="overflow-hidden w-8 h-8 bg-orange-600 rounded-full">
                <img src={auth.user.image} alt="Profile" className="w-full h-full" />
              </button>
              {popup && (
                <div className={`absolute top-20 border rounded flex flex-col bg-white shadow-lg ${animate}`}>
                  <Link to="/Profile" className="px-4 py-2 hover:bg-indigo-600 hover:text-white">
                    My Profile
                  </Link>
                  <button className="px-4 py-2 hover:bg-indigo-600 hover:text-white">{auth.user.email}</button>
                  <button onClick={ReturnToHome} className="px-4 py-2 hover:bg-indigo-600 hover:text-white">
                    Logout
                  </button>
                </div>
              )}
            </li>
          )}
        </ul>
      </div>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <div className="bg-slate-900 p-12">
        <h1 className="text-white text-2xl font-bold">Footer</h1>
      </div>
    </div>
  );
}

export default Layout;
