import React from 'react';
import '../globals.css';
import Link from 'next/link';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Admin Header */}
      <header className='bg-blue-800 text-white p-4'>
        <h1 className='text-2xl font-bold'>Admin Panel</h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/admin/dashboard' className='hover:text-gray-300'>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href='/admin/users' className='hover:text-gray-300'>
                Users
              </Link>
            </li>
            <li>
              <Link href='/admin/settings' className='hover:text-gray-300'>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Admin Main Content */}
      <div className='flex flex-1'>
        <aside className='w-64 bg-gray-100 p-4'>
          <ul>
            <li>
              <Link
                href='/admin/dashboard'
                className='block py-2 hover:bg-gray-200'
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href='/admin/users'
                className='block py-2 hover:bg-gray-200'
              >
                Manage Users
              </Link>
            </li>
            <li>
              <Link
                href='/admin/settings'
                className='block py-2 hover:bg-gray-200'
              >
                Settings
              </Link>
            </li>
          </ul>
        </aside>
      </div>

      {/* Admin Footer */}
      <footer className='bg-blue-800 text-white p-4'>
        <p className='text-center'>
          &copy; {new Date().getFullYear()} Admin Panel. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AdminLayout;
