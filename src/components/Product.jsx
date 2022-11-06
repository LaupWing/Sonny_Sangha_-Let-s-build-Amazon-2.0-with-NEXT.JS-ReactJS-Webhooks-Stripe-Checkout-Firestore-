import { StarIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React, { useState } from 'react'

const Product = ({ id, title, price, description, category, image }) => {
   const [rating] = useState(2)

   return (
      <div>
         <p>{category}</p>
         <Image
            src={image}
            height={200}
            width={200}
            objectFit="contain"
         />
         <div className="flex">
            {Array(rating)
               .fill()
               .map((_, i) => (
                  <StarIcon
                     key={i}
                     className="h-5"
                  />
               ))}
         </div>
         <h4>{title}</h4>
      </div>
   )
}

export default Product