import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className='h-[700px] w-[1000px] bg-[#A2E2D8] flex justify-evenly items-center flex-col p-[80px]'>
        <i className='text-[#000] text-[48px] font-bold font-sans pl-[24px]'>Helpdesk System</i>
        <p className='font-normal text-[30px]'>Sign up here</p>
        <form action="" method="post" className='flex justify-evenly items-center flex-col h-full'>
            <input type="text" placeholder='Username' className='w-[600px] h-[73px] border-black border-[1px] text-[30px] font-normal text-[#000] px-[24px] placeholder:text-[#000]'/>
            <input type="text" placeholder='Password' className='w-[600px] h-[73px] border-black border-[1px] text-[30px] font-normal text-[#000] px-[24px] placeholder:text-[#000]'/>
            <input type="text" placeholder='Email' className='w-[600px] h-[73px] border-black border-[1px] text-[30px] font-normal text-[#000] px-[24px] placeholder:text-[#000]'/>
            <input onClick={() => handleNavigation("/SignIn")} type="button" value="Sign Up" className='w-[321px] h-[71px] rounded-[20px] bg-[#03CC17] text-[#fff] text-[30px] font-normal'/>
        </form>
        <div className='flex justify-evenly items-center w-full'>
            <p  onClick={() => handleNavigation("/Forgot")} className='cursor-pointer font-normal text-[20px] text-[#EA0000]'>Forgot Password</p>
            <p  onClick={() => handleNavigation("/SignIn")} className='cursor-pointer font-normal text-[30px]'>Sign In</p>
        </div>
    </div>
  )
}

export default SignUp
