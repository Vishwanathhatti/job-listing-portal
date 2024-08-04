import React from 'react'
import { useLocation } from 'react-router-dom'
import JobRoles from '../components/JobRoles'
import FeaturedJobsCard from '../components/FeaturedJobsCard'
import { Link } from 'react-router-dom'

const jobRoles=['Frontend Developer','Backend Developer', 'Software Developer', 'Project Manager', 'Data Analyst', 'Data Scientist', 'CyberSecurity Analyst', 'UI/UX Designer']

const  featuredJobs= [
  {
    companyName:'Amazon',
    role:'Web Developer',
    jobType:'Full-time',
    location:'Pune, India',
    locationType:'Remote',
    salary:180000,
    salaryPer:'Month',
    vacancies:5,
    companyLogo:'https://companieslogo.com/img/orig/AMZN-e9f942e4.png',
  
  },
  {
    companyName:'BOAT',
    role:'Data Analyst',
    jobType:'Full-time',
    location:'Bengaluru, India',
    locationType:'Hybrid',
    salary:1200000,
    salaryPer:'Year',
    vacancies:2,
    companyLogo:'https://cdn.dribbble.com/users/3480894/screenshots/17745481/media/d55fbf3d844e873f870b21ad1ae2e377.png',
    
  },
  {
    companyName:'Accenture',
    role:'Software Developer',
    jobType:'Internship',
    location:'Delhi, India',
    locationType:'Remote',
    salary:15000,
    salaryPer:'Month',
    vacancies:6,
    companyLogo:'https://companieslogo.com/img/orig/ACN-cce5b411.png',
    
  },
  {
    companyName:'Google',
    role:'Cybersecurity Analyst',
    jobType:'Full-time',
    location:'Bengaluru, India',
    locationType:'Remote',
    salary:1800000,
    salaryPer:'Year',
    vacancies:2,
    companyLogo:'https://companieslogo.com/img/orig/google-9646e5e7.png',
    
  },
]

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

<hr className='mb-20 ' />

<div className='flex flex-col items-center'>
      <h1 className='text-2xl sm:text-4xl font-semibold mb-5'>Featured Jobs</h1>
      <div className='flex p-4 flex-wrap w-full items-center justify-center  gap-9 mb-7'>
      {
        featuredJobs.map((jobs, index)=>(
          <FeaturedJobsCard key={index} name={jobs.companyName} role={jobs.role} jobType={jobs.jobType} location={jobs.location} locationType={jobs.locationType} salary={jobs.salary} salaryPer={jobs.salaryPer} vacancies={jobs.vacancies} companyLogo={jobs.companyLogo} />
        ))
      }
      </div>


      <Link href="#_" class="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">View More</span>
</Link>

</div>

<hr className='mt-8 mb-20' />



</div>
  )
}

export default Homepage