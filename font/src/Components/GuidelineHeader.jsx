import React from 'react'
import GuidelineHeaderIcon from './GuidelineHeaderIcon.jsx'

const GuidelineHeader = () => {
  return (
    <div className='bg-[#55d6c2] w-screen h-[90px] flex items-center justify-between'>
      <i className='text-[#F8F7F7] text-[48px] font-bold font-sans pl-[24px]'>Helpdesk</i> 
      <GuidelineHeaderIcon/>
    </div>
  )
}

export default GuidelineHeader
