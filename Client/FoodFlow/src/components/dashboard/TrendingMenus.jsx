import React from 'react'
import MapPin from '../shapeDisplays/MapPin'
import CircularDisplay from '../shapeDisplays/CircularDisplay'
import StarRating from '../shapeDisplays/StarRating'
import { IoIosHeart } from 'react-icons/io'
import potatoChipsMenu from '/public/images/potato-chips.png'
import Image from 'next/image'

export default function TrendingMenus() {
  return (
    <div className="w-[34%] border rounded-md h-full border-zinc-300 p-3">
            <div className="flex items-center gap-4">
            <MapPin/>
            <h2>Trending Menus</h2>
            </div>

            <div className="flex flex-col gap-1 mt-5">
              {
                Array(2).fill(1).map((x,i)=>{
                  return(
                        <div
                        key={i}
                        className="w-full h-14 border rounded-md flex items-center text-xs"
                        >
                          <div className="rounded-md w-1/2 h-full relative">
                            <Image
                            src={potatoChipsMenu}
                            alt="potato-chips"
                            className="w-full h-full rounded-md object-cover"
                            quality={80}
                            />
                            <CircularDisplay
                            position="absolute bottom-0 right-0 z-[999]"
                            color="text-black"
                            bg="bg-primary"
                             content={`#${i + 1}`}/>
                          </div>

                          <div className="w-1/2 h-full pl-3 flex flex-col gap-1 text-[0.6rem]">
                          <div className="flex flex-col">
                            <span>Potato chips</span>
                            <StarRating rating={4}/>
                          </div>
                            <div className="flex items-center gap-2 text-[#FF0C55]"><IoIosHeart size={20}/> 247 likes</div>
                          </div>
                        </div>
                  )
                })
              }
            </div>
          </div>
  )
}
