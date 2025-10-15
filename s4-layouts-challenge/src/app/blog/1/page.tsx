import React from 'react';
import BlogLayout from '../layout';

const BlogPost = () => {
  return (
    <BlogLayout title='Post 1'>
      <h2 className='text-2xl font-bold'>Blog Post Title</h2>
      <p className='text-gray-700'>This is the content of the blog post.</p>
    </BlogLayout>
  );
};

export default BlogPost;
