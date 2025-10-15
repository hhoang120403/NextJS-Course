import Link from 'next/link';
import React from 'react';

const BlogLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Blog Header */}
      <header className='bg-gray-900 text-white p-6'>
        <h1 className='text-3xl'>{title}</h1>
      </header>

      {/* Blog Content */}
      <div className='flex flex-1'>
        {/* Sidebar */}
        <aside className='w-64 bg-gray-200 p-4'>
          <ul>
            <li>
              <Link href='/blog/1' className='block py-2 hover:bg-gray-300'>
                Post 1
              </Link>
            </li>
            <li>
              <Link href='/blog/1' className='block py-2 hover:bg-gray-300'>
                Post 2
              </Link>
            </li>
            <li>
              <Link href='/blog/1' className='block py-2 hover:bg-gray-300'>
                Post 3
              </Link>
            </li>
          </ul>
        </aside>

        <main className='flex-1 p-6 bg-white'>{children}</main>
      </div>
    </div>
  );
};

export default BlogLayout;
