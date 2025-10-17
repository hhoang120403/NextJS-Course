'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ModalProduct = ({ productData }: { productData: Product }) => {
  const router = useRouter();

  const closeModal = () => router.push('/ecommerce');

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
      onClick={closeModal}
    >
      <div
        className='bg-white p-8 rounded-lg shadow-lg text-center relative'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-4 right-4 text-gray-500
            hover:text-gray-800'
          onClick={closeModal}
        >
          <X size={24} />
        </button>

        <h1 className='text-3xl mb-4'>{productData?.name}</h1>

        <img
          src={productData?.image}
          alt={productData?.name}
          className='w-[40rem] mx-auto rounded-lg'
        />

        <p className='text-2xl mt-4'>Price: {productData?.price}</p>
      </div>
    </div>
  );
};

export default ModalProduct;
