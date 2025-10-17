const Song = ({ params }: { params: { id: string } }) => {
  return <div className='text-2xl text-white'>Song: {params.id}</div>;
};
export default Song;
