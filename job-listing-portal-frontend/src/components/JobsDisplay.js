import React from 'react';
import JobData from '../assets/JobData';
import JobsCard from './JobsCard';


const JobsDisplay = () => {
  return (
    <div className="p-4 bg-white  rounded-lg md:max-h-[100vh] md:overflow-y-scroll hide-scrollbar">
      
      
      <div className='flex flex-col items-center p-1 '>

        {
          JobData.map((jobs, index)=>(
            <JobsCard key={index} id={jobs.id} name={jobs.companyName} role={jobs.role} jobType={jobs.jobType} location={jobs.location} locationType={jobs.locationType} salary={jobs.salary} salaryPer={jobs.salaryPer} vacancies={jobs.vacancies} companyLogo={jobs.companyLogo} description={jobs.description} requirements={jobs.requirements} />
        ))
        }


      </div>

    </div>
  );
};

export default JobsDisplay;
