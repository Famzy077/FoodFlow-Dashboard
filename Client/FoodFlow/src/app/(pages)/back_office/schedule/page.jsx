import { CiSearch } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function page() {
  return (
    <div className='mx-8 '>
        <div className='border w-full h-screen mb-8 border-zinc-400 rounded flex flex-col pr-4 pl-1 pb-8'>
            <button className="flex items-center w-32 h-8 bg-primary text-white justify-center gap-3 place-self-end rounded my-5 "><IoMdAddCircleOutline /> Add event</button>
            <div className="flex gap-2 h-full">
                {/* first box */}
                <div className="border border-zinc-300 w-3/5 h-full py-6 px-4 text-gray">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">Upcoming tasks</span>
                        <div className="w-[180px] relative h-6 border border-zinc-200 text-xs flex justify-center gap-4 px-2 items-center">
                            <CiSearch className="absolute top-1.5 left-5"/>
                            <input
                             type="text"
                             className="placeholder:text-xs placeholder:pl-12 outline-none w-full"
                             placeholder="Search events" />
                        </div>
                    </div>
                    <div className="my-6">May 2022</div>

                </div>
                {/* second box */}
                <div className="border border-zinc-300 w-2/5 h-full py-6 px-4">
                    <span className="font-semibold text-lg ">May 2022</span>
                    <div className="mt-6">
                        calendar
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
