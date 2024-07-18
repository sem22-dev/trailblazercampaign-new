"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Eclipse(){

    const pathname = usePathname()

    return(
        <div className={` ${pathname == '/leaderboard' || pathname == '/p' ? 'hidden' : 'block'} absolute w-full h-full opacity-100 z-10 `}>
            <Image src={'/eclipse.png'} width={1500} height={1500} alt="background" />
        </div>
    )
}
