'use client'

import { usePathname } from "next/navigation"

export default function TopLeft(){

    const pathname = usePathname()

    return(
        <div 
            className={` ${pathname == '/leaderboard' || pathname == '/p' ? 'hidden' : 'block'} side-grad`}
            >
                
            </div>
    )
}