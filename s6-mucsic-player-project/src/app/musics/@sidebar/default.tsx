import { Clock, Home, TrendingUp } from 'lucide-react';

const Default = async () => {
  await new Promise((resolve) =>
    setTimeout(() => resolve('Content is currently loading...'), 500)
  );

  return (
    <aside className='w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen'>
      <section>
        <h2 className='text-2xl font-bold mb-4'>MENU</h2>
        <nav className='mt-4'>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer'>
              <Home /> Discover
            </li>
            <li className='flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer'>
              <TrendingUp /> Trending
            </li>
            <li className='flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer'>
              <Clock /> Recent
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>FAVORITE</h2>
        <ul className='mt-2 mb-[2rem]'>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className='flex mt-[2rem] gap-4'>
              <img
                src='https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/t/h/thanh-guom-diet-quy_up.jpg'
                className='h-15 w-15 bg-gray-700 rounded-md object-cover'
              />
              <div>
                <p className='text-white'>Random</p>
                <p className='text-sm text-gray-400'>Person</p>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
};
export default Default;
