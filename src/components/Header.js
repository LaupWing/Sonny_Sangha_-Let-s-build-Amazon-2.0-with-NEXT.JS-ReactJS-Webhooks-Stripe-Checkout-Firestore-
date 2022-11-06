import React from 'react'
import Image from "next/image"
import {
   MagnifyingGlassIcon,
   ShoppingCartIcon
} from "@heroicons/react/24/outline"

const Header = () => {
   return (
      <header>
         <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
               <Image
                  src="https://links.papareact.com/f90"
                  width={150}
                  height={40}
                  objectFit={"contain"}
                  className="cursor-pointer"
               />
            </div>
            <button className="bg-yellow-400 flex-grow h-10 rounded-md hidden sm:flex hover:bg-yellow-500 items-center">
               <input
                  type="text"
                  className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
               />
               <MagnifyingGlassIcon className="h-12 p-4 " />
            </button>
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
               <div className="link">
                  <p>Hello Sonny Sangha</p>
                  <p className="font-extrabold md:text-sm">Account & Lists</p>
               </div>
               <div className="link">
                  <p>Returns</p>
                  <p className="font-extrabold md:text-sm">& Orders</p>
               </div>
               <div className="link">
                  <ShoppingCartIcon className="h-10" />
                  <p className="font-extrabold md:text-sm">Basket</p>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header