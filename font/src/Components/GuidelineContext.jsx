import React from 'react'
import Dashboard from './Dashboard'
import Newticket from './Newticket'
import MyTicket from './MyTicket'
import TicketDetails from './TicketDetails'
import { Route, Router, Routes } from 'react-router-dom'
import UserProfile from './UserProfile'
import ProfileSetting from './ProfileSetting'

const GuidelineContext = () => {
  return (
    <div className='bg-white h-[calc(100vh-140px)]'>
       <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Newticket' element={<Newticket/>}/>
        <Route path='/MyTicket' element={<MyTicket/>}/>
        <Route path='/ticket-details' element={<TicketDetails/>}/>
        <Route path='/Profile' element={<UserProfile/>}/>
        <Route path='/ProfileSetting' element={<ProfileSetting/>}/>
      </Routes>
    </div>
  )
}

export default GuidelineContext
