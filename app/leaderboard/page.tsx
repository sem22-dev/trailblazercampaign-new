"use client"

import { useState } from "react";
import { ChevronDown, ChevronUp, ListFilter, Columns3, Plus, Upload } from "lucide-react";
import LeaderboardMetrics from "@/components/leaderboard-metric";

export default function Leaderboard() {
  return (
    <main className="bg-[#252B36] z-50 px-2 sm:px-6 lg:px-12 py-12">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4">
            <Search />
            <Filter />
            <Columns />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-12">
     
          <div className="flex items-center gap-2 cursor-pointer">
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
    <div className="relative w-fit">
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
        <span className="text-[#fff] ml-20">Filter</span>
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
        <div className="absolute mt-2 bg-[#333945] text-white rounded-md shadow-lg w-full py-2 px-4 max-h-60 overflow-y-auto">
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Creators</h3>
            <ul className="space-y-2">
              <li className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
                Top ERC-721 Collection by Unique Transactions
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
                Top ERC-1155 Collections by Unique Transactions
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
                Top Creator Overall with most Unique Transactions
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
                Top Collection by Unique Holders
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Collectors</h3>
            <ul className="space-y-2">
              <li className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
                Top Collectors with most Unique Transactions
              </li>
            </ul>
          </div>
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
          <ul className="space-y-2">
            <li className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
              Artist
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
              Collector
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
