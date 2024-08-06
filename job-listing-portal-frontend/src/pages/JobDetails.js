import { Link, useParams } from 'react-router-dom';
import JobData from '../assets/JobData'; // Assuming this is where your job data is stored

function JobDetails() {
    const { id } = useParams(); // Extract the job ID from the URL
    const job = JobData.find((job) => job.id === parseInt(id)); // Find the job with the matching ID
  
    if (!job) {
      return <div>Job not found</div>;
    }
  
    return (
      <div className="container mx-auto p-5 md:px-20 mt-20">
        <div className="bg-white  p-5">
          <div className="flex gap-5 items-center mb-5">
            <img className="w-32 h-32 rounded-md" src={job.companyLogo} alt="Company Logo" />
            <div className="text-start">
              <h1 className="text-3xl font-semibold text-blue-700">{job.companyName}</h1>
              <h3 className="text-2xl">{job.role}</h3>
              <h5 className="text-xl text-gray-600">{job.location}</h5>
            </div>
          </div>
  
          <div className="flex gap-3 mb-5">
            <p className="text-md bg-blue-100 font-semibold p-2 rounded-lg">{job.jobType}</p>
            <p className="text-md bg-blue-100 font-semibold p-2 rounded-lg">{job.locationType}</p>
          </div>
  
          <div className="flex flex-col gap-2 mb-5">
            <h2 className="text-2xl font-semibold">Salary:</h2>
            <p className="text-lg">₹{job.salary} / {job.salaryPer}</p>
          </div>
  
          <div className="flex flex-col gap-2 mb-5">
            <h2 className="text-2xl font-semibold">Vacancies:</h2>
            <p className="text-lg">{job.vacancies}</p>
          </div>
  
          <div className="flex flex-col gap-2 mb-5">
            <h2 className="text-2xl font-semibold">Description:</h2>
            <p className="text-lg">{job.description}</p>
          </div>
  
          <div className="flex flex-col gap-2 mb-5">
            <h2 className="text-2xl font-semibold">Requirements:</h2>
            <ul className="list-disc list-inside">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-lg">{req}</li>
              ))}
            </ul>
          </div>
          <button  class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
<span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
<span class="relative">Apply now</span>
</button>
        </div>
      </div>
    );
  }

export default JobDetails;
