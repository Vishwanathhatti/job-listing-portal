import React, { useState } from 'react';

const Filter = () => {
  const [experience, setExperience] = useState(0);

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filter Jobs</h2>
      <form>
        {/* Experience Range */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Experience (Years)</label>
          <input
            type="range"
            min="0"
            max="10"
            value={experience}
            onChange={handleExperienceChange}
            className="w-[80%]"
          />
          <span> {experience} years</span>
        </div>

        {/* Job Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="internship">Internship</option>
            <option value="entry-level">Entry Level</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            {/* Options to be added via API */}
          </select>
        </div>

        {/* Location Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location Type</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="office">Office</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default Filter;
