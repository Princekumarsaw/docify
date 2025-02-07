import React, {userState} from "react"
import logo from "../images/logo.png";
import {Link} from 'react-router-dom';
import nameTag from '../images/nameTag.png';
import rightUp from '../images/signUpRight.png';

import { FaUser } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";

const SignUp = () => {
    const [username, setUsername] = userState("");
    const [name, setName] = userState("");
    const [email, setEmail] = userState("");
    const [phone , setPhone] = userState("");
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
                          <p className='text-[14px] text-[#808080]'>Username</p>
                          <div className="inputBox w-[100%]">
                              <i><FaUser /></i>
                              <input oneChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" name="username" id='username' placeholder="Enter your username" required/>
                          </div>
                      </div>
  
                      <div className="inputCon">
                          <p className='text-[14px] text-[#808080]'>Name</p>
                          <div className="inputBox w-[100%]">
                              <i><img src={nameTag} alt="" /></i>
                              <input oneChange={(e)=>{setName(e.target.value)}} value={name} type="text" name="Name" id='Name' placeholder="Enter your Name" required/>
                          </div>
                      </div>
  
                      <div className="inputCon">
                          <p className='text-[14px] text-[#808080]'>Email</p>
                          <div className="inputBox w-[100%]">
                              <i><MdEmail /></i>
                              <input oneChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" name="Email" id='Email' placeholder="Enter your Email" required/>
                          </div>
                      </div>
  
                      <div className="inputCon">
                          <p className='text-[14px] text-[#808080]'>Phone</p>
                          <div className="inputBox w-[100%]">
                              <i><FaPhoneAlt /></i>
                              <input oneChange={(e)=>{setPhone(e.target.value)}} value={phone} type="phone" name="Phone" id='Phone' placeholder="Enter your Phone number" required/>
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
                  <p>Already have an acccount <Link to="/login" className="text-blue-500">Login</Link> </p>
  
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
  
  export default SignUp
  