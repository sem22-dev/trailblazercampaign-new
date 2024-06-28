import ProfileMetrics from "@/components/profileMetrics";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen py-24">
       <div className=" min-h-screen w-full">
        <div className="z-10 h-[600px] flex items-center justify-center">
          <Image src={'/traiblazers.svg'} width={1000} height={1000} alt="bblazeers" className="w-[440px] h-[240px]"/>
          <div className="absolute bottom-1 z-10 ">
          <Image src={'/blazers-flex.png'} width={1500} height={1500} alt="background" />
          </div>
          {/* <div className="absolute -bottom-72 z-10">
          <Image src={'/mid-gradient.png'} width={1000} height={1500} alt="background" />
          </div> */}
          <div className="absolute z-10 -bottom-1 w-full object-cover">
          <Image src={'/galaxy.png'} width={6000} height={5000} alt="background" className=" object-fill" />
          </div>
          </div>
        </div>

        <div className=" -mt-16 flex justify-center items-end relative">
            <div className="mb-80 ">
              < Image src={'/cloud.svg'} width={500} height={1000} alt="background" className="" />
            </div>
            <div>
              < Image src={'/rocket.svg'} width={400} height={500} alt="background" className="" />
            </div>
            <div className="mb-80  ">
              < Image src={'/right-cloud.svg'} width={500} height={1000} alt="background" className="" />
            </div>
        </div>

          <div className=" border z-50 -mt-[400px] mx-12 glass p-8 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-2 items-center mb-12">
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

            <div className=" hidden lg:block absolute z-50 left-0 lg:-bottom-[1400px] xl:-bottom-[1540px] w-screen  ">
              <Image src={'/mintpad-line.svg'} width={2000} height={1000} alt="background" className="" />
            </div>


            {/* <div className=" hidden lg:block z-20 left-0 lg:-bottom-[1400px] xl:-bottom-[1500px] w-screen  ">
              <Image src={'/doge-pfps.svg'} width={2000} height={1000} alt="background" className="" />
            </div> */}

            <div 
                className="flex justify-between flex-col relative gap-12 lg:flex-row bg-Img py-12 lg:pt-96 lg:pb-48 px-12 xl:px-40 "
                
            >
                <div className=" flex z-50 flex-col gap-8">
                  <div>
                    <h1 className=" text-[#EC25A1] text-3xl font-bold">GET YOUR</h1>
                    <h1 className="text-[#E176FF] text-6xl font-bold">MINT PASS!</h1>
                  </div>
                  <h1 className=" text-3xl">Collect your Mintpad Quest NFT <br /> to start Taiko Trailblazer Points!</h1>
                  <p className="">Free claim to Unique PFP Collection <br /> Access to Taiko/Mintpad Mints <br /> Priority Mintpad Support</p>
                  <div className="flex gap-3 text-white  items-center">
                    <button
                        className="button-gradient px-16 py-4 text-2xl rounded-full font-bold"

                      >
                        MINT NOW
                      </button>
                  </div>
                      <div className=" flex gap-4 items-center">
                        < Image src={'/minted-pfp.svg'} width={130} height={1000} alt="background" className="" />
                        <p className=" text-gray-400">14k minted</p>
                      </div>
                </div>

                {/* right */}
              <div>
                < Image src={'/taiko-logo.svg'} width={508} height={508} alt="background" className="hidden lg:block" />
                < Image src={'/taiko-logo.svg'} width={400} height={508} alt="background" className="block lg:hidden" />
              </div>
            </div>

            <div className=" py-16 px-2 sm:px-6 relative lg:px-12">
              <div className=" z-50 h-32 -mt-32 left-0  absolute  w-full gradient-background"></div>
              <div>
                <h1 className=" text-[#E176FF] text-4xl font-bold">Top of the top</h1>
                <h1 className="text-2xl font-semibold mt-2">Check out the top here at mintpad</h1>
              </div>

              <div className=" flex items-center gap-4 my-12">
                  <button
                  className='flex  text-white z-50 items-center px-8 py-2 cursor-pointer button-gradient rounded-full'
                  >
                    SIGN UP
                  </button>

                     <button
                  className='flex  text-white z-50  items-center px-8 py-2 cursor-pointer border border-[#2E71F2] rounded-full'
                  >
                    Most Holders
                  </button>

                  <button
                  className='flex  text-white z-50  items-center px-8 py-2 cursor-pointer border border-[#2E71F2] rounded-full'
                  >
                    Most Transfers
                  </button>

                  <button
                  className='flex  text-white z-50  items-center px-8 py-2 cursor-pointer border border-[#2E71F2] rounded-full'
                  >
                    Cars
                  </button>

                  <button
                  className='flex  text-white z-50  items-center px-8 py-2 cursor-pointer border border-[#2E71F2] rounded-full'
                  >
                    Art
                  </button>
              </div>

             <ProfileMetrics />
            </div>

    </main>
  );
}
