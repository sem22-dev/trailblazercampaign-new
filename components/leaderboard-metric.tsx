"use client"

import { useState, useEffect } from "react";
import Image  from "next/image";


export default function LeaderboardMetrics(){
    return(
        <main className="min-h-screen my-8">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#252B36] text-[#717A8C]">
              <tr>
                <th scope="col" className="px-1 py-3 text-left text-xs font-medium tracking-wider">#</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-medium tracking-wider">Wallet</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-medium tracking-wider">Rank</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-medium tracking-wider">Age</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-medium tracking-wider">Labels</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-medium tracking-wider">Balance,$</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-medium tracking-wider">NFTs</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-medium tracking-wider">Twitter</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-medium tracking-wider">Activity</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-medium tracking-wider">Contacts</th>
                <th scope="col" className="px-1 py-3 text-left text-xs font-medium tracking-wider"></th>
              </tr>
            </thead>
            
            <tbody className="bg-[#252B36]">
              {Array.from({ length: 12 }).map((_, index) => (
                <tr key={index}>
                  <td className="px-1 py-4 whitespace-nowrap text-[#717A8C] text-sm font-medium">{index + 1}</td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-4">
                        <Image src={'/avatar-example.svg'} height={35} width={35} alt="avatar"/>
                        <h1>Sem.eth</h1>
                    </div>
                  </td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm font-medium"><h1 className="border w-fit py-1 px-2 rounded-xl border-[#32D74B] text-[#32D74B] font-medium bg-[#274539]">92</h1></td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm font-medium">2.5y</td>
                  <td className="px-1 py-4 w-[300px] text-sm font-medium">
                    <h1>
                      <span className="text-xl font-bold mr-1 text-[#E539AC]">·</span>Developer
                      <span className="text-xl font-bold ml-2 mr-1 text-[#3A9DFF]">·</span>Culture
                      <span className="text-xl font-bold ml-2 mr-1 text-[#FFDA1A]">·</span>ENS
                    </h1>
                  </td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm font-medium">20.1M</td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm font-medium">1K</td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm font-medium">33.5k</td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm max-w-[50px] font-medium">
                    <Image src={'/activity-example.svg'} width={100} height={100} alt="activity"/>
                  </td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm font-medium max-w-[50px]">
                    <Image src={'/contacts-example.svg'} width={100} height={100} alt="contacts"/>
                  </td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm font-medium max-w-[50px]">
                    <Image src={'/three-dots.svg'} width={30} height={100} alt="options"/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    )
}