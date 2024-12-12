import React from 'react'
import GuidelineHeader from './GuidelineHeader'
import GuidelineMenu from './GuidelineMenu'
import GuidelineFooter from './GuidelineFooter'
import GuidelineContext from './GuidelineContext'

const Guideline = () => {
  return (
    <div className="flex flex-col">
      <GuidelineHeader/>
      <div className='flex'>
        <GuidelineMenu/>
        <div className='flex flex-col flex-1'>
          <GuidelineContext/>
          <GuidelineFooter/>
        </div>
      </div>
    </div>
  )
}

export default Guideline
