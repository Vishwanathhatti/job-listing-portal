import React from 'react'
import { Link } from 'react-router-dom'

const JobsCard = ({id, name, role, jobType, location, locationType, salary, salaryPer, vacancies, companyLogo}) => {
  return (
    <Link to={`/job-details/${id}`} className='flex flex-col gap-2 w-[100%] lg:w-[70%] md:hover:shadow-xl outline outline-1 outline-gray-400 rounded-lg p-3 mb-5 hover:scale-105 transition-transform '>
        
        <div className='flex gap-2 items-center mb-4'>
            <div className='text-start'>
                <h1 className='text-xl font-semibold text-blue-700'>{name}</h1>
                <h3 className='text-lg '>{role}</h3>
                <h5 className='text-md text-gray-600'>{location}</h5>
            </div>
            <img className='ml-auto w-20 h-20 ' src={companyLogo} />

        </div>

        <div className='flex gap-2'>
            <p className='text-[9px] bg-[#FDD3D0]  font-semibold p-1 rounded-xl '>{jobType}</p>
            <p className='text-[9px] bg-[#FDD3D0]  font-semibold p-1 rounded-xl '>{locationType}</p>
        </div>

        <hr />

        <div className='flex justify-between'>
            <h1>₹{salary}/ {salaryPer}</h1>
            <h1>{vacancies} Vacancies</h1>
        </div>

    </Link>
  )
}

export default JobsCard