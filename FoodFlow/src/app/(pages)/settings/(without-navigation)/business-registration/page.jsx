"use client";

import BookingSetting from "@/components/market-place/BookingSetting";
import BusinessContact from "@/components/market-place/BusinessContact";
// import AddMenuBtn from "@/components/market-place/portfolio-menu/addMenuBtn";
import ProfileInfo from "@/components/market-place/ProfileInfo";
import RectangularToggle from "@/components/market-place/RectangularToggle";
import { useRouter } from "next/navigation";

const AddMenuBtn = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/settings/menu");
  };
  return (
    <>
      <button
        onClick={handleRoute}
        className='w-24 h-8 rounded-2xl bg-primary text-white ml-auto'
      >
        Add new
      </button>
    </>
  );
};

export default function page() {
  return (
    <div className='mt-16 flex flex-col gap-2'>
      <RectangularToggle
        text1='Profile information'
        text2='Iya Olounje Treats , Restaurant'
        content={<ProfileInfo />}
      />
      <RectangularToggle
        text1='Business contact'
        text2='Email , phone number and social media'
        content={<BusinessContact />}
      />
      <RectangularToggle
        text1='Portfolio/Menu'
        text2='2 items'
        content={<AddMenuBtn />}
      />
      <RectangularToggle
        text1='Booking settings'
        text2='Open or closed booking systems'
        content={<BookingSetting />}
      />
      <RectangularToggle
        text1='Review management'
        text2='Manage who can give you reviews'
      />

      <div className='max-w-[720px] w-full flex justify-center mt-auto'>
        <div className=' flex gap-4 mt-4'>
          <button className='w-36 h-8 border border-[#FE370C] rounded-3xl text-sm'>
            Discard changes
          </button>
          <button className='w-36 h-8 border border-primary rounded-3xl text-sm'>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
