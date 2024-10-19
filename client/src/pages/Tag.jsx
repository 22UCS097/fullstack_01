import React from 'react'
import { useSelector } from 'react-redux'

function Tag() {
    const {currentUser}=useSelector(state=>state.user);
    return (
        <div className='p-3 max-w-lg mx-auto'>
          <h2 className="text-3xl fontsemibold text-center my-7">Profile </h2>
           <form className='flex flex-col gap-4'>
            <img className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"  src={currentUser.avatar} alt="profile"/>
            <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg "/>
            <input type="text" placeholder="email" id="email" className="border  p-3 rounded-lg "/>
            <input type="text" placeholder="password" id="password" className="border p-3 rounded-lg "/>
              <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opaicty-80" >update</button>
        </form>

        <div className="flex justify-between mt-5">
            <span className="text-red-700 cursor-pointer">Delete account</span>
            <span className="text-red-700 cursor-pointer">signout</span>
        </div>
        </div>
         
         


    )
}

export default Tag
