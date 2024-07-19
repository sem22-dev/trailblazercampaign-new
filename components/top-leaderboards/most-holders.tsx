
import Image from "next/image";

export default function MostHolders() {

  interface Profile {
    rank: number;
    name: string;
    holders: string;
  }

  const demoData: Profile[] = [
    { rank: 1, name: 'HolderOne', holders: '1,000' },
    { rank: 2, name: 'Collector', holders: '950' },
    { rank: 3, name: 'NFTFan', holders: '900' },
    { rank: 4, name: 'ArtLover', holders: '850' },
    { rank: 5, name: 'CryptoCollector', holders: '800' },
    { rank: 6, name: 'TokenEnthusiast', holders: '750' },
    { rank: 7, name: 'DigitalFan', holders: '700' },
    { rank: 8, name: 'CryptoHawk', holders: '650' },
    { rank: 9, name: 'PixelKing', holders: '600' },
    { rank: 10, name: 'CryptoGuru', holders: '550' },
  ];

  return (
    <main>
      <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col mb-12 items-center'>
          {/* rank1 */}
          <div className='relative'>
            <Image src={'/rank-1.svg'} width={600} height={100} alt='1' className=''/>
            <div className='absolute inset-0 mt-64 ml-3 flex flex-col items-center justify-center text-center'>
              <h1 className='text-2xl font-medium'>{demoData[0].name}</h1>
              <p className='text-xl'><span className='text-gray-600'>Total Holds:</span> {demoData[0].holders}</p>
            </div>
          </div>

          <div className='flex gap-64 -mt-52'>
            {/* rank2 */}
            <div>
              <Image src={'/rank-2.svg'} width={150} height={100} alt='1'/>
              <div className='flex mt-1 flex-col items-center justify-center text-center'>
                <h1 className='text-xl font-medium'>{demoData[1].name}</h1>
                <p className='text-lg'><span className='text-gray-600'>Total Holds:</span> {demoData[1].holders}</p>
              </div>
            </div>
            {/* rank3 */}
            <div>
              <Image src={'/rank-3.svg'} width={150} height={100} alt='1'/>
              <div className='flex mt-1 flex-col items-center justify-center text-center'>
                <h1 className='text-xl font-medium'>{demoData[2].name}</h1>
                <p className='text-lg'><span className='text-gray-600'>Total Holds:</span> {demoData[2].holders}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ranks 4 to 10 */}
        {demoData.slice(3, 10).map(profile => (
          <div key={profile.rank} className='w-full mt-8'>
            <div className='relative p-[1px] rounded-2xl'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#FFC876] via-[#79FFF7] to-[#FF98E2] rounded-2xl'></div>
              <div className='flex rounded-2xl p-4 justify-between items-center relative bg-black'>
                <div className='flex items-center gap-4'>
                  <div className='relative p-0.5 rounded-full inline-block'>
                    <div className='absolute inset-0 bg-gradient-to-r from-[#FFC876] via-[#79FFF7] to-[#FF98E2] rounded-full'></div>
                    <div className='relative bg-black rounded-full px-4 py-2'>
                      <h1 className='text-xl font-medium'>{profile.rank}</h1>
                    </div>
                  </div>
                  <h1 className='text-xl font-medium'>{profile.name}</h1>
                </div>
                <p className='text-lg'><span className='text-gray-600'>Holds: </span> {profile.holders}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
