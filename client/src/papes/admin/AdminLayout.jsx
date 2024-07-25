import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminSidebar } from '~/components'

const AdminLayout = () => {
  return (
    <main className='grid grid-cols-12'>
      <div className='col-span-2 bg-main-600 text-white h-full max-h-screen overflow-y-auto'>
        <AdminSidebar />
        <div>content</div>
      </div>
      <div className ='col-span-10'>
        <Outlet />
      </div>
    </main>
  )
}

export default AdminLayout