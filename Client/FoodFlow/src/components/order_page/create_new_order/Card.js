import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Add AiFillHeart for filled heart
import CurrencyFormatter from "../../../utils/formatCurrency";
import { useDispatch } from "react-redux";
import { addToCart as addToCartAction } from "@/redux/features/cart/cartSlice";

export default function Card({ food }) {
  const dispatch = useDispatch();

  // State to track whether the food item is liked
  const [liked, setLiked] = useState(false);

  const addToCart = () => {
    dispatch(
      addToCartAction({ ...food, selectedPicture: food.selectedPicture })
    );
  };

  // Toggle like status
  const toggleLike = () => {
    setLiked((prev) => !prev); // Toggle liked state
    localStorage.setItem(
      `likedFood_${food.id}`,
      JSON.stringify(!liked) // Store the new liked status in local storage
    );
  };

  const image = 'https://feelgoodfoodie.net/wp-content/uploads/2020/07/Jollof-Rice-4.jpg';
  const blurDataURL = `${food.imageUrl}?w=16&h=16&blur=16&auto=format%2Ccompress`;

  return (
    <div className="200px">
      <div className="w-[100%] border border-secondary rounded-[10px] overflow-hidden">
        <div className="relative h-[fit-content]">
          <Image
            style={{ objectFit: "cover" }}
            src={food.selectedPicture || image}
            alt="food-image"
            fill
            priority
            sizes="(max-width: 235px) 100vw"
            className="border-b border-secondary"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
        <div className="items-start bg-white p-2 justify-between font-bold">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[1.2rem]">{food.itemName}</p>
              <p className="text-[1.1rem]">
                <CurrencyFormatter value={food.price} />
              </p>
            </div>

            {/* Like button (heart icon) */}
            {liked ? (
              <AiFillHeart
                size={27}
                className="text-red-500 cursor-pointer"
                onClick={toggleLike} // Toggle like on click
              />
            ) : (
              <AiOutlineHeart
                size={27}
                className="text-[zinc-400] cursor-pointer"
                onClick={toggleLike} // Toggle like on click
              />
            )}
          </div>

          <p onClick={addToCart} className="text-[.9rem] cursor-pointer text-primary space-y-2">
            Click to Order
          </p>
        </div>
      </div>
    </div>
  );
}
