import Image from "next/image"

export default function MintNow(){
    return(

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
        < Image src={'/mintpadtaiko.gif'} width={550} height={508} alt="background" className="" />
      </div>
      
    </div>
    )
}