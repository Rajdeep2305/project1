import React from 'react'
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className='h-[700px] w-[1000px] bg-[#A2E2D8] flex justify-evenly items-center flex-col p-[150px]'>
        <p className='font-normal text-[24px] w-[508px] text-center'>Don’t worry, Enter your email below and we will send you a link to change password. </p>
        <form action="" method="post" className='flex justify-evenly items-center flex-col h-full'>
            <input type="text" placeholder='Email' className='w-[600px] h-[73px] border-black border-[1px] text-[30px] font-normal text-[#000] px-[24px] placeholder:text-[#000]'/>
            <input onClick={() => handleNavigation("/SignIn")} type="button" value="Submit" className=' cursor-pointer w-[321px] h-[71px] rounded-[20px] bg-[#03CC17] text-[#fff] text-[30px] font-normal'/>
        </form>
        <button  onClick={() => handleNavigation("/SignIn")} className=' w-[321px] min-h-[71px] rounded-[20px] bg-[#0769DC] text-[#fff] text-[30px] font-normal'>Sign In</button>
    </div>
  )
}

export default Forgot
