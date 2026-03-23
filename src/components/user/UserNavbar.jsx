import React from 'react'
import {Link} from 'react-router-dom';

const UserNavbar = () => {
  return (
    <div className='min-w-screen h-10 bg-gray-800'>
      <div className=' mx-10 py-2 flex items-center justify-between'>
        <p className='text-white font-bold  '>Navbar</p>
        <span className='text-white mr-10 flex gap-4'>
          <Link to="/user-dashboard"> Dashboard </Link>
          <Link to="/user-tree"> Tree </Link>
          <Link to="/user-analytics"> Analytics </Link>
          <Link to="/user-qr"> QR/Scan</Link>
          <Link to="/user-profile"> Profile </Link>
          <Link to="/user-integration"> Integration </Link>
          <Link to="/user-settings"> Settings </Link>
        </span>
      </div>
    </div>
  )
}

export default UserNavbar