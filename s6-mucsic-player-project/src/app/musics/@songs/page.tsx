import { Clock, Heart } from 'lucide-react';
import Link from 'next/link';

const SongsList = async () => {
  await new Promise((resolve) =>
    setTimeout(() => resolve('Content is currently loading...'), 4000)
  );

  const songs = [
    { id: 1, artist: 'Artist A', title: 'Song A', time: '3:30' },
    { id: 2, artist: 'Artist B', title: 'Song B', time: '4:00' },
    { id: 3, artist: 'Artist C', title: 'Song C', time: '2:45' },
    { id: 4, artist: 'Artist D', title: 'Song D', time: '3:04' },
  ];

  return (
    <div className='w-[96%] mx-auto px-4'>
      <h2 className='text-3xl text-white mt-8 font-bold mb-6'>
        Songs Collection
      </h2>

      <ul className='space-y-4'>
        {songs.map((song) => (
          <Link href={`/musics/${song.id}`} key={song.id}>
            <li
              key={song.id}
              className='flex justify-between items-center p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105'
            >
              <div className='flex items-center gap-5'>
                <img
                  src='https://i.ytimg.com/vi/hYU4b-UnCQA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQHMyp7RobppK7VfFPxzWHp1WQuQ'
                  className='h-16 w-16 bg-gray-700 rounded-md flex-shrink-0 object-cover'
                />

                <div>
                  <p className='text-white font-medium'>{song.title}</p>
                  <p className='text-sm text-gray-400'>{song.artist}</p>
                </div>
              </div>

              <div className='flex items-center gap-6 text-gray-400'>
                <div className='flex items-center gap-1'>
                  <Clock size={16} />
                  <span className='text-sm'>{song.time}</span>
                </div>

                <Heart
                  size={16}
                  className='cursor-pointer hover:text-red-500'
                />

                <button className='text-lg font-bold'>:</button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default SongsList;
