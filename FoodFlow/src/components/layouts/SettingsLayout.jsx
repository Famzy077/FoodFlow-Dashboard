'use client'
import ProfileCompletionCard from "@/components/card/ProfileCompletionCard"
import Link from "next/link"
import { CiLocationOn, CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function SettingsLayout() {
    const pathname = usePathname()
    const settings = [
        {name:'Profile', path: '/settings/profile', icon: <CiUser />},
        {name:'Permissions', path: '/settings/permission', icon: <CiLocationOn />},
        {name:'Subscriptions', path: '/settings/subscriptions', icon: <RiLockPasswordLine />},
        {name:'Marketplace', path: '/settings/market-place', icon: <IoIosNotificationsOutline />},
        {name:'Payments setttings', path: '/settings/payments', icon: <LuEye />},
        ]
  return (
    <div className="w-[400px] h-full border-r border-zinc-300 pt-8 pb-2 pl-5 flex flex-col justify-between">
            <ProfileCompletionCard/>
            <div className="flex flex-col gap-10">
                {
                    settings.map((set,i)=>{
                        return(
                            <Link 
                             key={set.name}
                              href={`${set.path}`}
                               className="flex justify-between items-center font-bold text-sm">

                             <div className={`
                                ${i !== settings.length -1 ? 'border-b pb-1 ':''}
                                 ${pathname == set.path?'text-primary':''}
                                  flex justify-between items-center font-bold text-sm border-zinc-300 pr-3 w-full`}>

                                    <div className="flex gap-4 items-center">
                                        <div className="text-xl">{set.icon}</div>
                                        <span>{set.name}</span>
                                    </div>
                                    <MdNavigateNext size={20}/>
                             </div>

                            </Link>
                        )
                    })
                }
            </div>
        </div>
  )
}
