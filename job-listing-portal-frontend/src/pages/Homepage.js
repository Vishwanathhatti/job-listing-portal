import React from 'react'
import { useLocation } from 'react-router-dom'
import JobRoles from '../components/JobRoles'
import FeaturedJobsCard from '../components/FeaturedJobsCard'
import { Link } from 'react-router-dom'

const jobRoles=['Frontend Developer','Backend Developer', 'Software Developer', 'Project Manager', 'Data Analyst', 'Data Scientist', 'CyberSecurity Analyst', 'UI/UX Designer']

const  featuredJobs= [
  {
  companyName: 'Amazon',
  role: 'Web Developer',
  jobType: 'Full-time',
  location: 'Pune, India',
  locationType: 'Remote',
  salary: 180000,
  salaryPer: 'Month',
  vacancies: 5,
  companyLogo: 'https://companieslogo.com/img/orig/AMZN-e9f942e4.png',
  description: 'As a Web Developer at Amazon, you will be responsible for the design, development, and maintenance of our web applications. You will work closely with a team of talented developers, designers, and product managers to create robust and scalable web solutions. Your day-to-day tasks will include writing clean and efficient code, troubleshooting and debugging applications, and ensuring cross-browser compatibility. You will also collaborate with backend developers to integrate APIs and ensure smooth functionality across the entire application. Staying updated with the latest web development trends and technologies will be crucial in this role to continuously improve our products and services. Additionally, you will participate in code reviews and provide constructive feedback to your peers, fostering a culture of continuous improvement and innovation within the team. The ideal candidate is passionate about web development, has a keen eye for detail, and is eager to contribute to a dynamic and fast-paced environment.',
  requirements: ['Experience with HTML, CSS, JavaScript', 'Knowledge of React or Angular', 'Strong problem-solving skills', 'Familiarity with RESTful APIs', 'Understanding of web performance optimization techniques'],
},
{
  companyName: 'BOAT',
  role: 'Data Analyst',
  jobType: 'Full-time',
  location: 'Bengaluru, India',
  locationType: 'Hybrid',
  salary: 1200000,
  salaryPer: 'Year',
  vacancies: 2,
  companyLogo: 'https://cdn.dribbble.com/users/3480894/screenshots/17745481/media/d55fbf3d844e873f870b21ad1ae2e377.png',
  description: 'As a Data Analyst at BOAT, you will play a critical role in analyzing and interpreting complex data sets to help drive business decisions. You will be responsible for collecting, processing, and analyzing data to identify trends, patterns, and insights. Your work will directly impact our strategic initiatives and help optimize our operations. You will collaborate with various teams, including marketing, sales, and product development, to provide data-driven recommendations. Creating reports and dashboards to track key performance metrics will be a significant part of your responsibilities. You will also conduct data validation and ensure data accuracy. The ideal candidate is detail-oriented, has strong analytical skills, and is proficient in data analysis tools and techniques. Additionally, you should have excellent communication skills to effectively present your findings to stakeholders and translate complex data into actionable insights.',
  requirements: ['Proficient in SQL and Excel', 'Experience with data visualization tools like PowerBI', 'Strong analytical skills', 'Ability to work with large datasets', 'Excellent communication and presentation skills'],
},
{
  companyName: 'Accenture',
  role: 'Software Developer',
  jobType: 'Internship',
  location: 'Delhi, India',
  locationType: 'Remote',
  salary: 15000,
  salaryPer: 'Month',
  vacancies: 6,
  companyLogo: 'https://companieslogo.com/img/orig/ACN-cce5b411.png',
  description: 'As a Software Developer Intern at Accenture, you will gain hands-on experience in software development and contribute to real-world projects. Under the guidance of senior developers, you will assist in designing, coding, testing, and maintaining software applications. You will have the opportunity to learn and apply best practices in software development, including version control, code reviews, and agile methodologies. Your tasks will include writing code, debugging issues, and collaborating with team members to deliver high-quality software solutions. This internship will provide you with valuable exposure to various technologies and development tools. You will also have the chance to participate in team meetings and contribute ideas to improve our processes and products. The ideal candidate is eager to learn, has a basic understanding of programming languages, and is passionate about building software solutions.',
  requirements: ['Basic knowledge of programming languages', 'Good communication skills', 'Eagerness to learn', 'Ability to work in a team', 'Familiarity with version control systems like Git'],
},
{
  companyName: 'Google',
  role: 'Cybersecurity Analyst',
  jobType: 'Full-time',
  location: 'Bengaluru, India',
  locationType: 'Remote',
  salary: 1800000,
  salaryPer: 'Year',
  vacancies: 2,
  companyLogo: 'https://companieslogo.com/img/orig/google-9646e5e7.png',
  description: 'As a Cybersecurity Analyst at Google, you will be responsible for protecting our systems and data from cyber threats. You will identify and mitigate security vulnerabilities, conduct security assessments and audits, and develop and implement security policies and procedures. Your role will involve monitoring network traffic, analyzing security incidents, and responding to security breaches. You will work closely with other teams to ensure the security of our products and services. Additionally, you will stay up-to-date with the latest cybersecurity trends and technologies to proactively address potential threats. The ideal candidate has strong analytical skills, experience in cybersecurity, and a deep understanding of security protocols and tools. You should also have excellent problem-solving abilities and the capability to work in a fast-paced environment.',
  requirements: ['Experience in cybersecurity', 'Knowledge of security protocols and tools', 'Strong problem-solving skills', 'Ability to analyze and respond to security incidents', 'Familiarity with network security'],
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
          <FeaturedJobsCard key={index} name={jobs.companyName} role={jobs.role} jobType={jobs.jobType} location={jobs.location} locationType={jobs.locationType} salary={jobs.salary} salaryPer={jobs.salaryPer} vacancies={jobs.vacancies} companyLogo={jobs.companyLogo} description={jobs.description} requirements={jobs.requirements} />
        ))
      }
      </div>


      <Link to="/jobs/#" class="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">View More</span>
</Link>

</div>

<hr className='mt-8 mb-20' />



</div>
  )
}

export default Homepage