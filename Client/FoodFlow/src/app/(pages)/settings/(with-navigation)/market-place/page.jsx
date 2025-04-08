'use client'
import RectangularToggle from "@/components/market-place/RectangularToggle";
import ProfileImage from "@/components/profile/ProfileImage";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter()
  const handleRoute = ()=>{
    router.push('/settings/business-registration')
  }
  return (
   <>
    <ProfileImage/>

    <div className="mt-16 flex flex-col gap-2">
      <div className="w-full max-w-[720px] flex justify-end">
        <button
            onClick={handleRoute}
            className="w-40 h-8 bg-primary text-white rounded-3xl text-sm">
              Add new seller profile
        </button>
      </div>
      <RectangularToggle
       text1='Profile type'
        text2='2 profiles'
        // content={
        //   <button
        //   onClick={handleRoute}
        //    className="w-40 h-8 bg-primary text-white rounded-3xl text-sm ml-auto">Add new seller profile</button>
        // }
        />
    </div>

    <div className="max-w-[720px] w-full flex justify-center mt-auto">
          <div className=" flex gap-4 ">
            <button className="w-36 h-8 border border-red-500 rounded-3xl text-sm">Discard changes</button>
            <button className="w-36 h-8 border border-primary rounded-3xl text-sm">Save changes</button>
          </div>
        </div>
   </>
  )
}
