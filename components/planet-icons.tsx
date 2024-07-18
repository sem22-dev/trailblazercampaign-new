"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Planets(){

    const pathname = usePathname()

    return(
        <div className={`absolute w-full h-full opacity-100 ${pathname == '/leaderboard' || pathname == '/p' ? 'hidden' : 'hidden'}`}>
            <Image src={'/planet.svg'} width={1700} height={100} alt="background" className= " z-0" />
        </div>
    )
}
