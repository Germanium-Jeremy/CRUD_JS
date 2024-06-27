import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between px-[3rem] py-[1rem] bg-black text-white fixed top-0 right-0 left-0'>
     <div className='font-bold text-2xl'>CRUD</div>
     <div className='flex gap-[2rem]'>
          <Link to={'/tasks'} className='px-[1rem] py-1 rounded-md shadow-sm bg-gray-900 hover:shadow-white'>View Tasks</Link>
          <Link to={'/add-task'} className='px-[1rem] py-1 rounded-md shadow-sm bg-gray-900 hover:shadow-white'>Add Tasks</Link>
          <Link to={'/signup'} className='px-[1rem] py-1 rounded-md shadow-sm bg-white text-black hover:shadow-white'>Signup</Link>
     </div>
    </div>
  )
}

export default Header