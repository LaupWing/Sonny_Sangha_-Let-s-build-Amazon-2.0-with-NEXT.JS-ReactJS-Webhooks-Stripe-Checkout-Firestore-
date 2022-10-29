import React from 'react'
import Image from "next/image"

const Header = () => {
   return (
      <header>
         <div>
            <div>
               <Image
                  src="https://links.papareact.com/f90"
                  width={150}
                  height={40}
               />
            </div>
         </div>
         <div></div>
      </header>
   )
}

export default Header