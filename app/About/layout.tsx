import Link from 'next/link'
import React from 'react'
import About from './page'

export default function layout({children}: { children: React.ReactNode }) {
  return (
    <div  className=''>
         <nav className=' bg-blue-500 p-2  text-white  flex items-center justify-between g-6'>
           <div className="flex items-center justify-center gap-6 max-w-6xl mx-auto">
        <Link href='/About/Web'>
            Web
        </Link>
       <Link href='/About/mobile'>
          Mobile
        </Link>
        </div>

         </nav>

           <div className="max-w-6xl mx-auto p-5">
             <About/>
             {children}
         </div>

    </div>
  )
}
