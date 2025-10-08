import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
        <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value=" " disabled hidden selected>Select a job category</option>
            <option value="iOS Development">iOS Development</option>
            <option value="Android Development">Android Development</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Development Advocate">Development Advocate</option>
        </select>
        <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value=" " disabled hidden selected>Select a job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
            <option value="Internship">Internship</option>
        </select>
        <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value=" " disabled hidden selected>Select a location</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value=" " disabled hidden selected>Select your experience </option>
            <option value="Entry-level">Entry-level</option>
            <option value="Mid-level">Mid-level</option>
            <option value="Senior-level">Senior-level</option>
            <option value="Lead">Lead</option>
            <option value="Management">Management</option>
        </select>

        <button className='w-64 py-3 pl-4 bg-blue-500 text-white font-bold rounded-md'>Search</button>
    </div>
  )
}

export default SearchBar