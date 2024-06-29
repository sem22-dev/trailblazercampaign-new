"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Planets(){

    const pathname = usePathname()

    return(
        <div className={`absolute w-full h-full opacity-100 ${pathname == '/leaderboard' ? 'hidden' : 'block'}`}>
            <Image src={'/planet.svg'} width={1500} height={1500} alt="background" />
        </div>
    )
}