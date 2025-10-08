import React from 'react'
import dayjs from 'dayjs'

const JobCard = (props) => {
    // const skills = ["JavaScript","React","Node.js","MongoDB"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(dayjs(props.postedOn), 'day');
  return (
    <div className='mx-40 mb-4 '>
        <div className='flex justify-between item-center px-6 py-4 bg-zinc-200 rounded-md border-black shadow-1g hover:border-blue-500 hover:translate-y-1 hover:scale 105'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                <div className='flex item-center gap-2'>
                    {props.skills.map((skill) => (
                        <p key={skill} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <p className='text-grey-500'>Posted {diffInDays} days ago</p>
                <a href='job_link'>
                    <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'>Apply</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default JobCard