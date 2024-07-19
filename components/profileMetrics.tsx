
"use client";
import React, { useState } from 'react';
import MostMints from '@/components/top-leaderboards/most-mints';
import MostHolders from '@/components/top-leaderboards/most-holders';
import MostTransfers from '@/components/top-leaderboards/most-transfers';
import Cars from '@/components/top-leaderboards/cars';
import Arts from '@/components/top-leaderboards/arts';

const ProfileMetrics = () => {
  const [currentCategory, setCurrentCategory] = useState('mostMints'); 

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
  };

  return (
    <div className="py-16 px-12 xl:px-80 bg-black relative">
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-[#E176FF] text-4xl font-bold">Top of the top</h1>
        <h1 className="text-2xl font-semibold mt-2">Check out the top here at mintpad</h1>
      </div>

      <div className="flex items-center justify-center gap-4 mt-12">
        <button onClick={() => handleCategoryChange('mostMints')} className={`flex text-white z-50 items-center px-8 py-3 cursor-pointer ${currentCategory === 'mostMints' ? 'button-gradient' : 'border border-[#2E71F2]'} rounded-full`}>Most Mints</button>
        <button onClick={() => handleCategoryChange('mostHolders')} className={`flex text-white z-50 items-center px-8 py-3 cursor-pointer ${currentCategory === 'mostHolders' ? 'button-gradient' : 'border border-[#2E71F2]'} rounded-full`}>Most Holders</button>
        <button onClick={() => handleCategoryChange('mostTransfers')} className={`flex text-white z-50 items-center px-8 py-3 cursor-pointer ${currentCategory === 'mostTransfers' ? 'button-gradient' : 'border border-[#2E71F2]'} rounded-full`}>Most Transfers</button>
        <button onClick={() => handleCategoryChange('cars')} className={`flex text-white z-50 items-center px-8 py-3 cursor-pointer ${currentCategory === 'cars' ? 'button-gradient' : 'border border-[#2E71F2]'} rounded-full`}>Cars</button>
        <button onClick={() => handleCategoryChange('arts')} className={`flex text-white z-50 items-center px-8 py-3 cursor-pointer ${currentCategory === 'arts' ? 'button-gradient' : 'border border-[#2E71F2]'} rounded-full`}>Arts</button>
      </div>

      <div>
        {currentCategory === 'mostMints' && <MostMints />}
        {currentCategory === 'mostHolders' && <MostHolders />}
        {currentCategory === 'mostTransfers' && <MostTransfers />}
        {currentCategory === 'cars' && <Cars />}
        {currentCategory === 'arts' && <Arts />}
      </div>
    </div>
  );
};

export default ProfileMetrics;

