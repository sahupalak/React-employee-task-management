import React from 'react'

function AcceptTask({ data }) {
  console.log(data.taskTitle);

  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-slate-500 rounded-xl '>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
    </div> 
    <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-5'>
    {data.taskDescription} 
    </p>
    <div className='mt-5 flex justify-between'>
    <button className='py-1 px-2 bg-green-500 text-sm'>Mark as completed</button>
    <button className='py-1 px-2 bg-red-500 text-sm'>Mark as failed</button>
    </div>
 </div>
  )
}

export default AcceptTask