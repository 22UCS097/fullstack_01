import React, { useState } from 'react'


import { Link,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInFailure,signInStart,signInSuccess } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

function SignUp() {
    const dispatch=useDispatch();
     const [formData,setFormData]=useState({});
      const {loading,error}=useSelector((state)=>state.user);
     const navigate=useNavigate();

      const handelChanege=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value,
        })
    }

    const handelSubmit=async(e)=>{
        e.preventDefault();
        try{
            dispatch(signInStart());
         const res=await fetch('/api/auth/signin',
         {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
             body:JSON.stringify(formData),
      });
    const data= await res.json();
    console.log(data.message);
    if(data.success === false){
         dispatch(signInFailure(data.message));
        return ;
    }
     dispatch(signInSuccess(data));
    navigate('/');
}catch(error){
     dispatch(signInFailure(error.message));
  }
};
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center front-semibild my-7"> Sign In</h1>
            <form onSubmit={handelSubmit} className="flex flex-col gap-4">
                <input type="email" placeholder='emial' className="border p-3 rounded-lg " id='email' onChange={handelChanege} />
                <input type="password" placeholder='password' className="border p-3 rounded-lg " id='password' onChange={handelChanege} />
                <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading?"Loading..":"sign In"} 
                </button>
                <OAuth/>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Don't have an account?</p>
                <Link to={"/sign-in"}>
                <span className="text-blue-700">sign-up</span>
                </Link>
            </div>
            {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
        
    )
}

export default SignUp
