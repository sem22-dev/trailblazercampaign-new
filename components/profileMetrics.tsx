
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
    <div className="py-16 px-12 xl:px-40 relative">
      <div className="z-50 h-32 -mt-32 left-0 absolute w-full gradient-background"></div>
      <div>
        <h1 className="text-[#E176FF] text-4xl font-bold">Top of the top</h1>
        <h1 className="text-2xl font-semibold mt-2">Check out the top here at mintpad</h1>
      </div>

      <div className="flex items-center gap-4 my-12">
        <button className="flex text-white z-50 items-center px-8 py-2 cursor-pointer button-gradient rounded-full">Most Mints</button>
        <button className="flex text-white z-50 items-center px-8 py-2 cursor-pointer border border-[#2E71F2] rounded-full">Most Holders</button>
        <button className="flex text-white z-50 items-center px-8 py-2 cursor-pointer border border-[#2E71F2] rounded-full">Most Transfers</button>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
        {/* Rank 1 */}
        <div
          className="col-span-2 profile-bg bg-opacity-20 row-span-2 border flex flex-col gap-4 justify-center items-center text-white text-xl relative px-4 py-8"
          style={{
            borderImage: `linear-gradient(to right, ${gradientColors.start}, ${gradientColors.mid1}, ${gradientColors.mid2}, ${gradientColors.end}) 1`,
            backgroundImage: 'linear-gradient(to bottom, #170E22 0%, #0E133C  100%)',
            borderRadius: '24px'
          }}
          
        >
          <div className="absolute top-12 left-12 bg-[#232229] w-12 h-12 flex items-center justify-center rounded-full text-lg">1</div>
          <Image src={profiles[0].imageUrl} alt="Profile" width={1000} height={1000} className="w-40 lg:w-56 h-40 lg:h-56 rounded-full" />
          <Image src={'/one.svg'} alt="Profile" width={1000} height={1000} className="w-40 h-40 absolute -bottom-8 right-0" />
          <div className="text-center text-4xl font-medium">{profiles[0].name}</div>
          <div className="text-center text-2xl"><span className='text-[#636363]'>Total mints:</span> {profiles[0].totalMints}</div>
        </div>
        {/* Rank 2 to 11 */}
        {profiles.slice(1).map(profile => (
          <div
           key={profile.rank} className=" border-[#4f4f4f] rounded-xl py-8 flex border flex-col justify-center gap-2 items-center text-white relative"
           style={{
            borderImage: `linear-gradient(to right, ${gradientColors.start}, ${gradientColors.mid1}, ${gradientColors.mid2}, ${gradientColors.end}) 1`,
            borderRadius: '24px'
          }}
           >
            <div className="absolute top-4 left-4 bg-[#232229] w-8 h-8 flex items-center justify-center rounded-full text-base">{profile.rank}</div>
            <Image src={profile.imageUrl} width={100} height={100} alt="Profile" className="w-28 h-28 rounded-full" />
            <div className="text-center py-1">{profile.name}</div>
            <div className="text-center text-sm"><span className='text-[#636363]'>Total mints:</span> {profile.totalMints}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileMetrics;
