"use client"
import Image from "next/image"

export default function GetStarted(){
    return(
        <div className=" border z-50 -mt-[400px] mx-12 glass p-8 flex flex-col items-center justify-center">
            <div className="flex flex-col z-50 gap-2 items-center mb-12">
              <h1 
                className="text-[#B25ACB] text-3xl font-semibold"
              >
                How it works
              </h1>
              <h1 className="text-xl">Create.Mint.Earn.</h1>
            </div>
            <div className="flex">
              <div className=" w-72 flex flex-col gap-2 items-center text-center justify-center">
                < Image src={'/one.svg'} width={70} height={1000} alt="background" className=" -mb-12" />
                <h1 className="text-lg font-semibold">Setup Your Account</h1>
                <p className=" text-sm text-[#A3A3A3] leading-6">Set up your Metamask wallet. Connect it to Mintpad by clicking the Sign Up icon in the top right corner</p>
              </div>
              < Image src={'/arrow.svg'} width={70} height={1000} alt="background" className=" mx-12" />
              <div className=" w-72 flex flex-col gap-2 items-center text-center justify-center">
                < Image src={'/two.svg'} width={100} height={1000} alt="background" className=" -mb-4" />
                <h1 className="text-lg font-semibold">Create NFTs/Collectibles</h1>
                <p className=" text-sm text-[#A3A3A3] leading-6">Upload your work and setup your collection. Make 1155 or 721 collectibles and make them public for others to mint.</p>
              </div>
              < Image src={'/arrow.svg'} width={70} height={1000} alt="background" className=" mx-12" />
              <div className=" w-72 flex flex-col gap-2 items-center text-center justify-center">
                < Image src={'/three.svg'} width={100} height={1000} alt="background" className=" -mb-10" />
                <h1 className="text-lg font-semibold">Mint</h1>
                <p className=" text-sm text-[#A3A3A3] leading-6">Start minting some NFTs you love. Whether is your own NFT you made, your friends, or one you just think deserves a mint.</p>
              </div>
            </div>
          </div>
    )
}