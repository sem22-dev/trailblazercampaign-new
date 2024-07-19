import Image from "next/image"
import Marquee from "react-fast-marquee";


export default function MintpadLine(){
    return(
        <main>
            <div className=" hidden lg:block absolute z-50 left-0 lg:-bottom-[1500px]  w-screen  ">
                <div className="relative">
                    <Image src={'/black-triangle.svg'} width={2000} height={1000} alt="background" className="" />
                    <div className=" -rotate-6 absolute w-screen  top-24">
                        <Marquee className="py-4 bg-[#00B86C] w-screen">
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                        </Marquee>
                    </div>
                </div>
            </div>

            {/* smaller screens */}
            <div className="block lg:hidden mt-4">
                        <Marquee className="py-4 bg-[#00B86C] w-screen">
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                            <h1 className="px-8 text-2xl text-black font-semibold">Minting now</h1>
                        </Marquee>
                    </div>
        </main>
    )
}