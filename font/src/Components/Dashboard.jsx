import React, { useEffect, useState } from 'react'
import { Ticket } from '../assets/assets'

const Dashboard = () => {
  const [tic, setTicket] = useState([]);
  useEffect(() => {
    const fetchEdu = async () => {
      try {
        const response = await fetch("/api/Ticket");
        if (!response.ok) {
          throw new Error(`Failed to fetch Ticket: ${response.statusText}`);
        }
        const data = await response.json();

        const EduWithKeys = data.map((ticket, index) => ({
          ...ticket,
          key: ticket._id || index, // Use _id if available, otherwise use index
        }));

        setTicket(EduWithKeys);
      } catch (error) {
        console.error("Error fetching Edu:", error);
        // Display an error message to the ticket
      }
    };

    fetchEdu();
  }, []);
  let solved = 0;
  let Approval = 0;
  let Progress =0;
  tic.forEach((Item) => {
    if(Item.Status === "Closed"){
      solved++;
    }else if(Item.Status === "On hold"){
      Approval++;
    }else {
      Progress++;
    }
  })
  
  return (
    <>
      <p className='text-[36px] font-normal font-sanchez text-center my-[26px]'>Dashboard</p>
      <div className='flex justify-evenly items-center max-h-[calc(100vh-250px)] flex-wrap overflow-auto'>
        {/* Box1 */}
        <div className='bg-[#2F82FF] h-[273px] w-[248px] rounded-[20px] m-3 shadow-custom flex justify-evenly items-center flex-col'>
          <p className='text-[24px] font-sanchez font-normal text-center'>Total Tickets</p>
          <p className='text-[98px] font-normal font-sanchez text-[#05386B] text-center '>{tic.length}</p>
        </div>
        {/* Box2 */}
        <div className='bg-[#0BFF68] h-[273px] w-[248px] rounded-[20px] m-3 shadow-custom flex justify-evenly items-center flex-col'>
          <p className='text-[24px] font-sanchez font-normal text-center'>Total Solved</p>
          <p className='text-[98px] font-normal font-sanchez text-[#05386B] text-center '>{solved}</p>
        </div>
        {/* Box3 */}
        <div className='bg-[#FE594E] h-[273px] w-[248px] rounded-[20px] m-3 shadow-custom flex justify-evenly items-center flex-col'>
          <p className='text-[24px] font-sanchez font-normal text-center'>Total Awaiting Approval</p>
          <p className='text-[98px] font-normal font-sanchez text-[#05386B] text-center '>{Approval}</p>
        </div>
        {/* Box4 */}
        <div className='bg-[#FCFF6C] h-[273px] w-[248px] rounded-[20px] m-3 shadow-custom flex justify-evenly items-center flex-col'>
          <p className='text-[24px] font-sanchez font-normal text-center'>Total in Progress</p>
          <p className='text-[98px] font-normal font-sanchez text-[#05386B] text-center '>{Progress}</p>
        </div>
      </div>
    </>
  )
}

export default Dashboard
