import React, {userState} from 'react'
import logo from "../images/logo.png";
import {Link} from 'react-router-dom';
import rightUp from '../images/loginRight.png';

import { IoEye } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";


const Login = () => {
    const [email, setEmail] = userState("");
    const [pwd, setPwd] = userState("");
    const [error] = userState("");

    return (
        <>
         <div className="flex overflow-hidden items-center w-screen justify-center flex-col h-screen bg-[#F0F0F0]">
             <div className="flex w-full iteam-center">
                 <div className="left w-[30%]  flex-col ml-[100px]">
                     <img className='w-[210px]' src={logo} alt=""/>
                     <from className='pl-3 mt-5' action="">
     
                         <div className="inputCon">
                             <p className='text-[14px] text-[#808080]'>Email</p>
                             <div className="inputBox w-[100%]">
                                 <i><MdEmail /></i>
                                 <input oneChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" name="Email" id='Email' placeholder="Enter your Email" required/>
                             </div>
                         </div>
     
                         <div className="inputCon">
                             <p className='text-[14px] text-[#808080]'>Password</p>
                             <div className="inputBox w-[100%]">
                                 <i><FaUserLock /></i>
                                 <input oneChange={(e)=>{setPwd(e.target.value)}} value={pwd} type="password" name="Password" id='Password' placeholder="Enter your Password" required/>
                                 <i className='cursor-pointer !mr-3 !text-[25px]'><IoEye /></i>
                             </div>
                         </div>
                     </from>
     
                     <p className="text-red-500 text-[14px] my-2">{error}</p>
                     <p> Don't have an acccount <Link to="/SingUp" className="text-blue-500">Sing Up</Link> </p>
     
                     <button className='p-[10px] bg-green-500 transition-all hover:bg-green-600 text-white rounded-lg w-full border-0 mt-3'>Sing up</button>
     
                 </div>
                 <div className="right flex  px-52 items-end justify-end">
                     <img  className="h-full w-[30vw]" src= {rightUp} alt="" />
                 </div>
             </div>
         </div>
         </>
       )
   
}


export default Login
