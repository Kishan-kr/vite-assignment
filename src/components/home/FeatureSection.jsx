import React from 'react'
import FeatureItem from './FeatureItem'
import degreeHat from '/icons/icon-park-twotone_degree-hat.svg'
import enquire from '/icons/icon-park-twotone_enquire.svg'
import search from '/icons/icon-park-twotone_search.svg'
import tableReport from '/icons/icon-park-twotone_table-report.svg'
import student from '/images/Student.svg'
import teacher from '/images/Teacher.svg'
import ChatBubble from './ChatBubble'

function FeatureSection() {
  return (
    <div className='px-3 my-6 py-12 md:flex items-center'>
      {/* left side starts here */}
      <div className="flex flex-col mb-6 md:w-[60%] md:pe-8">

        <h2 className='text-6xl font-bold text-black '><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>All-in-One</span> platform that Makes Easier</h2>

        <p className='text-black text-2xl mt-9 mb-20'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>

        <div className='flex flex-col gap-6 md:flex-row flex-wrap'>
          <FeatureItem icon={search} firstWord='search' description='for vital company information' />
          <FeatureItem icon={enquire} firstWord='connect' description='with the resources to meet your business needs' />
          <FeatureItem icon={tableReport} firstWord='research' description='and generate reports that drive growth' />
          <FeatureItem icon={degreeHat} firstWord='academy' description='to give you the skills for success in your career' />
        </div>
      </div>
      {/* left side ends here  */}

      {/* right side starts here  */}
      <div>
        <div className='flex justify-end text-right'>
          <div className='flex flex-col items-end'>
            <ChatBubble text='Hey, check out loreumipsum services.' bg={'purple-200'} dir={'ee'}/>
            <ChatBubble text='I learned from their videos, got my first job.' bg='purple-200' dir='ee' />
            <ChatBubble text="You won't be disappointed with their services." bg='purple-200' dir='ee' />

            <div className='mt-6 relative left-6 flex flex-col items-end'>
              <ChatBubble text='I got a perfect analysis report from them too' bg='cyan-100' dir='es' />
              <ChatBubble text="Oh, that's great." bg='cyan-100' dir='es' />
            </div>
          </div>

          <div className='w-52 h-56 bg-cover min-w-[160px]' style={{ backgroundImage: `url(${student})` }}>
          </div>
        </div>

        <div>
          <div className='w-52 h-56 bg-cover relative md:bottom-6' style={{ backgroundImage: `url(${teacher})` }}>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeatureSection