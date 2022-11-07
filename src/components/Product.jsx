import { StarIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React, { useState } from 'react'

const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({ id, title, price, description, category, image }) => {
   const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1))) + MIN_RATING

   const [hasPrime] = useState(Math.random() < 0.5)

   return (
      <div>
         <p>{category}</p>
         <Image
            src={image}
            height={200}
            width={200}
            objectFit="contain"
         />
         <h4>{title}</h4>
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

         {hasPrime && <p>Has prime delivery</p>}
         <p>{description}</p>

         <div>

         </div>
      </div>
   )
}

export default Product