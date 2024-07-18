import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="py-4 px-8">
            <div className="flex gap-16 text-sm pb-4 justify-end mr-16 text-gray-500">
                <Link href={'/'}>TERMS</Link>
                <Link href={'/'}>PRIVACY</Link>
                <Link href={'/'}>CONTACT</Link>
            </div>
            <div className="border-t flex items-center justify-between border-[#2b2b2b] py-8">
                <h1 className="text-gray-500">© 2024 Mintpad</h1>
                <div className="flex  items-center gap-12">
                    <Link href={'/'} className=" bg-[#14131D] w-fit p-4 rounded-full">
                        <Image src={'/tiktok.svg'} width={25} height={25} alt="tiktok" className="" />
                    </Link>
                    <Link href={'/'} className=" bg-[#14131D] w-fit p-4 rounded-full">
                        <Image src={'/ig.svg'} width={25} height={25} alt="tiktok" className="" />
                    </Link>
                    <Link href={'/'} className=" bg-[#14131D] w-fit p-4 rounded-full">
                        <Image src={'/discord.svg'} width={25} height={25} alt="tiktok" className="" />
                    </Link>
                    <Link href={'/'} className=" bg-[#14131D] w-fit p-4 rounded-full">
                        <Image src={'/twitter.svg'} width={25} height={25} alt="tiktok" className="" />
                    </Link>
                    <Link href={'/'} className=" bg-[#14131D] w-fit p-4 rounded-full">
                        <Image src={'/telegram.svg'} width={25} height={25} alt="tiktok" className="" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
