import React from 'react'
import { useLocation } from 'react-router-dom'
import JobRoles from '../components/JobRoles'

const jobRoles=['Frontend Developer','Backend Developer', 'Software Developer', 'Project Manager', 'Data Analyst', 'Data Scientist', 'CyberSecurity Analyst', 'UI/UX Designer']


const Homepage = () => {
  
  return (
    <div className='mt-32 mb-10 px-3 w-full'>
      <div className='mt-20 mb-5'>
      <h1 className='text-center m-6 text-4xl sm:text-5xl font-bold text-blue-600'>Find your dream job now</h1>
      <h3 className='text-center mb-12  sm:text-2xl '>More than 1000 jobs for you to explore</h3>
<div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
  <input
    type="email"
    placeholder="Job title, keywords, company name"
    className="w-full bg-white pl-4 text-sm border-none focus:outline-none focus:ring-0 focus:border-transparent"
  />
  <button
    type="button"
    className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
  >
    Search
  </button>
</div>
</div>

<div className='flex flex-col items-center justify-center  w-full'>
  <h1 className='text-lg sm:text-xl  font-semibold'>Popular searches</h1>
  <div className='flex items-center justify-center gap-4 flex-wrap my-4 md:w-[60%]'>

      {jobRoles.map((role, index) => (
        <JobRoles key={index} role={role} />
      ))}
  </div>
</div>

<hr className='mb-20' />

<div>

</div>

</div>
  )
}

export default Homepage