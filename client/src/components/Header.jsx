import React from 'react'
import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Header() {
  
    const {currentUser} =useSelector((state)=>state.user);
    console.log(currentUser.avatar);
    
    return (
     <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to="/"> 
     <h1 className='font-bold text-sm sm:text-xl fex flex-wrap'>
            <span className='text-slate-500'>ravi_</span>
            <span className='text-slate-700'>verma</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-salet-600'/>
        </form>
        <ul className='flex gap-4'>
             <Link to="/"><li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>
             <Link to="/about"><li  className='hidden sm:inline text-slate-700 hover:underline'>About</li></Link>
            <Link to="/tag">
            {currentUser ?
            <img className="rounded-full w-7 h-7" src={currentUser.avatar} alt="profile"/>
            : <li  className='text-slate-700 hover:underline'>SignIn</li>
            }
                </Link>
        </ul>
        </div>
     </header>
    )
}

export default Header
