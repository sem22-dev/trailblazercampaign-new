import GetStarted from "@/components/sections/getStarted";
import MintNow from "@/components/sections/mint-now";
import MintpadLine from "@/components/mintpad-line";
import ProfileMetrics from "@/components/profileMetrics";
import RocketLaunch from "@/components/rocket-launch";
import Image from "next/image";
import TopCreators from "@/components/top-creators";
import TopSellers from "@/components/top-sellers";

export default function Home() {
  return (
    <main className="w-screen py-24">
       <div className=" min-h-screen w-full">
        <div className="z-10 h-[600px] flex items-center justify-center">
          <Image src={'/traiblazers.svg'} width={1000} height={1000} alt="bblazeers" className="w-[440px] h-[240px]"/>
          <div className="absolute bottom-1 z-10 ">
          <Image src={'/blazers-flex.png'} width={1500} height={1500} alt="background" />
          </div>
          <div className="absolute top-40  z-10  h-full w-full object-cover">
            <Image src={'/galaxy.svg'} width={2000} height={1000} alt="background" className="h-ful; w-full object-fill" />
          </div>
          </div>
        </div>

        <div className="z-10">
          <RocketLaunch />
        </div>

          <div  id="getstarted" >
            <GetStarted />
          </div>

          <MintpadLine />
          <MintNow />
            {/* <TopSellers /> */}
           <div id="leaderboard" >
            <ProfileMetrics />
           </div>
           {/* <TopCreators /> */}

    </main>
  );
}
