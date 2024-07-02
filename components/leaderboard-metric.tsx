import { useState, useEffect, JSX, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";

export interface LeaderboardData {
  message: string;
  rank: number;
  wallet: string;
  rankScore: number;
  labels: string[];
  nfts: string;
  avatar: string;
  activity: string;
  opensea: string;
  twitter: string;
  blockscan: string;
}

export default function LeaderboardMetrics() {
  const [data, setData] = useState<LeaderboardData[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/getdetails')
      .then(response => response.json())
      .then((data) => {
        const modifiedData = data.map((item: { labels: string; }) => ({
          ...item,
          labels: typeof item.labels === 'string' ? item.labels.split(',') : item.labels
        }));
        setData(modifiedData);
      });
  }, []);
  
  return (
    <main className="min-h-screen my-8">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-[#252B36] text-[#717A8C] text-sm">
            <tr>
              <th scope="col" className="px-2 py-3 text-left tracking-wider">#</th>
              <th scope="col" className="px-2 py-3 text-left tracking-wider">Wallet</th>
              <th scope="col" className="px-2 py-3 text-left tracking-wider">Rank</th>
              <th scope="col" className="px-2 py-3 text-left tracking-wider">Labels</th>
              <th scope="col" className="px-2 py-3 text-left tracking-wider">NFTs Minted</th>
              <th scope="col" className="px-2 py-3 text-left tracking-wider">Activity</th>
              <th scope="col" className="px-2 py-3 text-left tracking-wider">Contacts</th>
              <th scope="col" className="px-2 py-3 text-left tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-[#252B36]">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-2 py-4 whitespace-nowrap text-[#717A8C] text-sm font-medium">{item.rank}</td>
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-4">
                    <Image src={item.avatar} height={35} width={35} alt="avatar"/>
                    <Link href={`/p/${item.wallet}`}>{item.wallet}</Link>
                  </div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium">
                  <h1 className="border w-fit py-1 px-2 rounded-xl border-[#32D74B] text-[#32D74B] font-medium bg-[#274539]">
                    {item.rankScore}
                  </h1>
                </td>
                <td className="px-2 py-4 w-[300px] text-sm font-medium">
                  <h1>
                    {Array.isArray(item.labels) ? (
                      item.labels.map((label, idx) => (
                        <span key={idx}>
                          <span className={`text-xl font-bold mr-1 ${getColor(label)}`}>·</span>{label}
                        </span>
                      ))
                    ) : (
                      <span>{item.labels || "No labels available"}</span>
                    )}
                  </h1>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium">{item.nfts}</td>
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium max-w-[50px]">
                  <Image src={item.activity} width={100} height={100} alt="activity"/>
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium max-w-[50px]">
                  <ContactIcons opensea={item.opensea} twitter={item.twitter} blockscan={item.blockscan} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );

  function getColor(label: string) {
    switch (label) {
      case "Developer":
        return "text-[#E539AC]";
      case "Culture":
        return "text-[#3A9DFF]";
      case "ENS":
        return "text-[#FFDA1A]";
      default:
        return "text-white";
    }
  }
}

interface ContactIconsProps {
  opensea: string;
  twitter: string;
  blockscan: string;
}

function ContactIcons({ opensea, twitter, blockscan }: ContactIconsProps) {
  return (
    <div className="flex items-center gap-4">
      {opensea && (
        <Link href={opensea} target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors" prefetch={false}>
          <SailboatIcon className="w-6 h-6" />
        </Link>
      )}
      {twitter && (
        <Link href={twitter} target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors" prefetch={false}>
          <TwitterIcon className="w-6 h-6" />
        </Link>
      )}
      {blockscan && (
        <Link href={blockscan} target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors" prefetch={false}>
          <Etherscan className="w-6 h-6" />
        </Link>
      )}
    </div>
  );


function SailboatIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
      <path d="M21 14 10 2 3 14h18Z" />
      <path d="M10 2v16" />
    </svg>
  )
}
function Etherscan(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="123"
      height="123"
      viewBox="0 0 123 123"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M25.79 58.4149C25.7901 57.7357 25.9244 57.0633 26.1851 56.4361C26.4458 55.809 26.8278 55.2396 27.3092 54.7605C27.7907 54.2814 28.3619 53.9021 28.9903 53.6444C29.6187 53.3867 30.2918 53.2557 30.971 53.2589L39.561 53.2869C40.9305 53.2869 42.244 53.831 43.2124 54.7994C44.1809 55.7678 44.725 57.0813 44.725 58.4509V90.9309C45.692 90.6439 46.934 90.3379 48.293 90.0179C49.237 89.7962 50.0783 89.262 50.6805 88.5019C51.2826 87.7418 51.6102 86.8006 51.61 85.8309V45.5409C51.61 44.1712 52.154 42.8576 53.1224 41.889C54.0908 40.9204 55.4043 40.3762 56.774 40.3759H65.381C66.7506 40.3762 68.0641 40.9204 69.0325 41.889C70.0009 42.8576 70.545 44.1712 70.545 45.5409V82.9339C70.545 82.9339 72.7 82.0619 74.799 81.1759C75.5787 80.8462 76.2441 80.2941 76.7122 79.5886C77.1803 78.8832 77.4302 78.0555 77.431 77.2089V32.6309C77.431 31.2615 77.9749 29.9481 78.9431 28.9797C79.9113 28.0113 81.2245 27.4672 82.5939 27.4669H91.201C92.5706 27.4669 93.884 28.0109 94.8525 28.9794C95.8209 29.9478 96.365 31.2613 96.365 32.6309V69.3399C103.827 63.9319 111.389 57.4279 117.39 49.6069C118.261 48.4717 118.837 47.1386 119.067 45.7267C119.297 44.3148 119.174 42.8678 118.709 41.5149C115.931 33.5227 111.516 26.1983 105.745 20.0105C99.974 13.8228 92.9749 8.90785 85.1955 5.58032C77.4161 2.2528 69.0277 0.585938 60.5671 0.686416C52.1065 0.786893 43.7601 2.6525 36.062 6.16383C28.3638 9.67517 21.4834 14.7549 15.8611 21.078C10.2388 27.401 5.99842 34.8282 3.41131 42.8842C0.824207 50.9401 -0.0526487 59.4474 0.836851 67.8617C1.72635 76.276 4.36263 84.4119 8.57696 91.7489C9.31111 93.0145 10.3912 94.0444 11.6903 94.7175C12.9894 95.3906 14.4536 95.679 15.911 95.5489C17.539 95.4059 19.566 95.2029 21.976 94.9199C23.0251 94.8008 23.9937 94.2999 24.6972 93.5126C25.4008 92.7253 25.7901 91.7067 25.791 90.6509L25.79 58.4149Z" fill="#21325B"/>
      <path d="M25.6021 110.51C34.6744 117.11 45.3959 121.072 56.5802 121.957C67.7646 122.841 78.9757 120.615 88.9731 115.523C98.9705 110.431 107.364 102.673 113.226 93.1068C119.087 83.5405 122.188 72.539 122.185 61.3197C122.185 59.9197 122.12 58.5347 122.027 57.1577C99.808 90.2957 58.7831 105.788 25.604 110.505" fill="#979695"/>
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  
  )
}
}