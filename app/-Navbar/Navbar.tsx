"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "../globals.css";

export default function Navbar() {
    const pathname = usePathname()
    const links=
        [
            {path:'/' , link:'Home' },
            {path:'/About' , link:'About' },
            {path:'/Contact' , link:'Contact' },
        ]
  return (
    <>
     <nav className='bg-black p-5  text-white  '>
        <div className="max-w-7xl mx-auto flex items-center justify-between g-5 ">
        <div className="logo">
            <h1 className='text-2xl font-bold'>
                Logo
            </h1>

        </div>
        <div className="links flex items-center justify-center ">
             {links.map((link) => {
                return <Link href={link.path} key={link.path} className={`px-5 ${pathname === link.path ? 'active' : ''}`}> 
                 {link.link}
                </Link>
             })}
        </div>
  
               
        
        
     </div>

     </nav>
     
    </>
  )
}
