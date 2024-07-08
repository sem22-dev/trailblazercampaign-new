"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Profile {
  address: string;
  name: string;
  nfts: string;
  username: string;
  rank: number;
  contractAddress: string;
  holderAddress: string;
  imageUrl: string;
  data: string;

  profile?: {
    data?: string;
  };
  tokenHolder?: {
    address: string;
    value: string;
  };
}

const ProfileMetrics = () => {
  const [currentCategory, setCurrentCategory] = useState('mostMints'); 
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    fetchProfiles();
  }, [currentCategory]);

  const fetchProfiles = async () => {
    try {
      let endpoint = '';
      switch (currentCategory) {
        case 'mostMints':
          endpoint = 'mostmint';
          break;
        case 'mostHolders':
          endpoint = 'mostholder';
          break;
        case 'mostTransfers':
          endpoint = 'mosttransfers';
          break;
        default:
          endpoint = 'mostmint';
          break;
      }

      const response = await fetch(`http://localhost:3000/api/${endpoint}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      const modifiedData = data.map((item: Profile) => {
        if (item.profile && item.profile.data) {
          const asciiValues = item.profile.data;
          const buffer = Buffer.from(asciiValues, 'base64'); 
          const decodedString = buffer.toString('utf-8'); 

          return {
            ...item,
            profile: {
              ...item.profile,
              data: decodedString 
            }
          };
        }
        return item;
      });

      setProfiles(modifiedData);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setProfiles([]); // Reset profiles when changing category
  };

  return (
    <div className="py-16 px-12 xl:px-40 relative">
      <div className="z-50 h-32 -mt-32 left-0 absolute w-full gradient-background"></div>
      <div>
        <h1 className="text-[#E176FF] text-4xl font-bold">Top of the top</h1>
        <h1 className="text-2xl font-semibold mt-2">Check out the top here at mintpad</h1>
      </div>

      <div className="flex items-center gap-4 my-12">
        <button onClick={() => handleCategoryChange('mostMints')} className={`flex text-white z-50 items-center px-8 py-2 cursor-pointer ${currentCategory === 'mostMints' ? 'button-gradient' : 'border border-[#2E71F2]'} rounded-full`}>Most Mints</button>
        <button onClick={() => handleCategoryChange('mostHolders')} className={`flex text-white z-50 items-center px-8 py-2 cursor-pointer ${currentCategory === 'mostHolders' ? 'button-gradient' : 'border border-[#2E71F2]'} rounded-full`}>Most Holders</button>
        <button onClick={() => handleCategoryChange('mostTransfers')} className={`flex text-white z-50 items-center px-8 py-2 cursor-pointer ${currentCategory === 'mostTransfers' ? 'button-gradient' : 'border border-[#2E71F2]'} rounded-full`}>Most Transfers</button>
      </div>

      {profiles.length > 0 && (
        <>
          {currentCategory === 'mostMints' && (
            <div className="mt-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
                {profiles.map((profile, index) => (
                  <div
                    key={index}
                    className="col-span-2 profile-bg bg-opacity-20 row-span-2 border flex flex-col gap-4 justify-center items-center text-white text-xl relative px-4 py-8"
                    style={{
                      borderImage: `linear-gradient(to right, #FFC876, #79FFF7, #9F53FF, #FF98E2) 1`,
                      backgroundImage: 'linear-gradient(to bottom, #170E22 0%, #0E133C  100%)',
                      borderRadius: '24px'
                    }}
                  >
                    <div className="absolute top-12 left-12 bg-[#232229] w-12 h-12 flex items-center justify-center rounded-full text-lg">{profile.rank}</div>
                    <Image
                      src={profile.profile?.data || '/profile1.svg'} 
                      alt="Profile"
                      width={1000}
                      height={1000}
                      className="w-40 lg:w-56 h-40 lg:h-56 rounded-full"
                    />
                    <Image src={'/one.svg'} alt="Profile" width={1000} height={1000} className="w-40 h-40 absolute -bottom-8 right-0" />
                    <div className="text-center text-4xl font-medium">{profile.username}</div>
                    <div className="text-center text-2xl"><span className='text-[#636363]'>Total mints:</span> {profile.nfts}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentCategory === 'mostHolders' && (
            <div className="mt-8">
              <div className="flex flex-col gap-4">
                {profiles.map((profile, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-4 px-6 bg-gray-800 rounded-md shadow-md"
                  >
                    <div className="flex items-center">
                      <div className="text-2xl font-bold mr-4">{profile.rank}</div>
                      <div className="flex flex-col">
                        <div className="text-lg">Contract Address:</div>
                        <div className="text-gray-400">{profile.address}</div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg">Holder Address:</div>
                      <div className="text-gray-400">{profile.tokenHolder?.address}</div>
                      <div className="text-lg">Collection Name:</div>
                      <div className="text-gray-400">{profile.name}</div>
                      <div className="text-lg">Holder Amount:</div>
                      <div className="text-gray-400">{profile.tokenHolder?.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentCategory === 'mostTransfers' && (
            <div className="mt-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
                {profiles.map((profile, index) => (
                  <div
                    key={index}
                    className="col-span-2 profile-bg bg-opacity-20 row-span-2 border flex flex-col gap-4 justify-center items-center text-white text-xl relative px-4 py-8"
                    style={{
                      borderImage: `linear-gradient(to right, #FFC876, #79FFF7, #9F53FF, #FF98E2) 1`,
                      backgroundImage: 'linear-gradient(to bottom, #170E22 0%, #0E133C  100%)',
                      borderRadius: '24px'
                    }}
                  >
                    <div className="absolute top-12 left-12 bg-[#232229] w-12 h-12 flex items-center justify-center rounded-full text-lg">{profile.rank}</div>
                    <Image
                      src={profile.profile?.data || '/profile1.svg'} 
                      alt="Profile"
                      width={1000}
                      height={1000}
                      className="w-40 lg:w-56 h-40 lg:h-56 rounded-full"
                    />
                    <Image src={'/one.svg'} alt="Profile" width={1000} height={1000} className="w-40 h-40 absolute -bottom-8 right-0" />
                    <div className="text-center text-4xl font-medium">{profile.username}</div>
                    <div className="text-center text-2xl"><span className='text-[#636363]'>Total mints:</span> {profile.nfts}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileMetrics;
