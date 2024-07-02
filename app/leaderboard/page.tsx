"use client"

import { useState } from "react";
import { ChevronDown, ChevronUp, ListFilter, Columns3, Plus, Upload } from "lucide-react";
import LeaderboardMetrics from "@/components/leaderboard-metric";

export default function Leaderboard() {
  return (
    <main className="bg-[#252B36] z-50 px-2 sm:px-6 lg:px-12 py-12">
      <div className=" flex items-center justify-between">
            <div>
                <div className="flex items-center gap-4">
                    <Search />
                    <Filter />
                    <Columns />
                </div>
            </div>

            <div className=" hidden lg:flex items-center gap-12">
                <div className=" flex items-center gap-2 cursor-pointer">
                    <Plus color="#A2A8B4"/>
                    <h1>Add data</h1>
                </div>
                <div className=" flex items-center gap-2 cursor-pointer">
                    <Upload color="#A2A8B4"/>
                    <h1>Export</h1>
                </div>
            </div>
      </div>
    {/* metrics */}
      <div>
            <LeaderboardMetrics />
      </div>
    </main>
  );
}

function Search() {
  return (
    <div className="relative w-fit ">
      <label htmlFor="Search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="Search"
        placeholder="Search"
        className="w-full rounded-md border border-transparent hover:bg-[#3c4151] bg-[#333945] focus:outline-none focus:border-transparent placeholder:text-[#717A8C] placeholder:text-base py-2.5 px-10 shadow-sm sm:text-sm"
      />
      <span className="absolute inset-y-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#717A8C"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
}

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex w-fit items-center bg-[#333945] rounded-md py-2.5 px-4 shadow-sm cursor-pointer hover:bg-[#3c4151]"
        onClick={toggleDropdown}
      >
        <ListFilter className="h-5 w-5 text-[#717A8C]" />
        <span className="text-[#fff] ml-2">Filter</span>
        <span
          className={`ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-[#717A8C]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#717A8C]" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-2 bg-[#333945] text-white rounded-md shadow-lg w-full py-2">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Top Minter
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
           Top Collection
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
             Top 10
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
      Top 20
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function Columns() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center bg-[#333945] rounded-md py-2.5 px-4 shadow-sm cursor-pointer hover:bg-[#3c4151]"
        onClick={toggleDropdown}
      >
        <Columns3 className="h-5 w-5 text-[#717A8C]" />
        <span className="text-[#fff] ml-2">Columns</span>
        <span
          className={`ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-[#717A8C]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#717A8C]" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-2 bg-[#333945] text-white rounded-md shadow-lg w-full py-2">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Option 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Option 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Option 3
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Option 4
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
