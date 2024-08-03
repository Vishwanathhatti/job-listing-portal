import React from 'react'
import { Link } from 'react-router-dom'

const jobRoles=['Frontend Developer','Backend Developer', 'Software Developer', 'Project Manager', 'Data Analyst', 'Data Scientist', 'CyberSecurity Analyst', 'UI/UX Designer']

const JobRoles = ({role}) => {
  return (
    <Link>
    <div className='outline-purple-800 outline-1 outline p-2 rounded-md hover:bg-purple-800 hover:text-white hover:shadow-lg'>
      <h1 className='font-semibold cursor-pointer '>{role}</h1>
    </div>
    </Link>
  )
}

export default JobRoles