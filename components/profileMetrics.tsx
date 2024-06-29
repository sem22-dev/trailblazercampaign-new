

import Image from 'next/image';

const ProfileMetrics = () => {
  const profiles = [
    { rank: 1, name: 'Keepitreal', totalMints: "1,299", imageUrl: '/profile1.svg' },
    { rank: 2, name: 'GravityOne', totalMints: "1,100", imageUrl: '/profile1.svg' },
    { rank: 3, name: 'Charlie', totalMints: "1000", imageUrl: '/profile1.svg' },
    { rank: 4, name: 'David', totalMints: 950, imageUrl: '/profile1.svg' },
    { rank: 5, name: 'Eve', totalMints: 900, imageUrl: '/profile1.svg' },
    { rank: 6, name: 'Frank', totalMints: 850, imageUrl: '/profile1.svg' },
    { rank: 7, name: 'Grace', totalMints: 800, imageUrl: '/profile1.svg' },
    { rank: 8, name: 'Hank', totalMints: 750, imageUrl: '/profile1.svg' },
    { rank: 9, name: 'Ivy', totalMints: 700, imageUrl: '/profile1.svg' },
    { rank: 10, name: 'Jack', totalMints: 650, imageUrl: '/profile1.svg' },
    { rank: 11, name: 'Karen', totalMints: 600, imageUrl: '/profile1.svg' },
    { rank: 12, name: 'Karen', totalMints: 600, imageUrl: '/profile1.svg' },
  ];

  const gradientColors = {
    start: '#FFC876',
    mid1: '#79FFF7',
    mid2: '#9F53FF',
    end: '#FF98E2',
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-5 grid-rows-6  gap-4">
      {/* Rank 1 */}
      <div
      className="col-span-2 rounded-xl profile-bg bg-opacity-20 row-span-2 border flex flex-col gap-6 items-center text-white text-xl relative px-4 py-12"
        style={{
            borderImage: `linear-gradient(to right, ${gradientColors.start}, ${gradientColors.mid1}, ${gradientColors.mid2}, ${gradientColors.end}) 1`,
            borderRadius: '24px'
          }}
      
      >
        <div className="absolute top-12 left-12 bg-[#232229] w-12 h-12 flex items-center justify-center rounded-full text-lg">1</div>
        <Image src={profiles[0].imageUrl} alt="Profile" width={1000} height={1000} className=" w-56 h-56 rounded-full" />
        <div className="text-center text-4xl font-medium">{profiles[0].name}</div>
        <div className="text-center"><span className='text-[#636363]'>Total mints:</span> {profiles[0].totalMints}</div>
      </div>
      {/* Rank 2 to 11 */}
      {profiles.slice(1).map(profile => (
        <div key={profile.rank} className=" border border-[#4f4f4f] rounded-xl h-56 flex flex-col items-center  text-white relative p-4">
          <div className="absolute top-6 left-6 bg-[#232229] w-8 h-8 flex items-center justify-center rounded-full text-base">{profile.rank}</div>
          <Image src={profile.imageUrl} width={100} height={100} alt="Profile" className="w-24 h-24 rounded-full" />
          <div className="text-center py-2">{profile.name}</div>
          <div className="text-center"><span className='text-[#636363]'>Total mints:</span> {profile.totalMints}</div>
        </div>
      ))}
    </div>
  );
};

export default ProfileMetrics;
