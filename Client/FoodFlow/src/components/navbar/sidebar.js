"use client";
import { useState } from "react";
import Link from "next/link";
import {
  AiOutlineDashboard,
  AiOutlineStock,
  AiOutlineSetting,
} from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { BsListColumnsReverse, BsChevronDown, BsBag } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdOutlineCreate, MdOutlineInventory } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { TbCurrencyNaira } from "react-icons/tb";
import { RiContactsLine} from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";
import './side.css'

const Sidebar = () => {
  const router = useRouter()
  const [isDropdownOne, setIsDropdownOne] = useState(false);
  const [isDropdownTwo, setIsDropdownTwo] = useState(false);
  const [isDropdownThree, setIsDropdownThree] = useState(false);
  const pathname = usePathname();

  const toggleDropdownOne = () => {
    setIsDropdownOne(!isDropdownOne);
  };

  const toggleDropdownTwo = () => {
    setIsDropdownTwo(!isDropdownTwo);
  };
  const toggleDropdownThree = () => {
    setIsDropdownThree(!isDropdownThree);
  };

  const handleLogout =()=>{
    localStorage.removeItem('auth_token');
    router.push('/login')
  }

  const toggleNav = () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("hidden");
  }

  return (
    <nav className="bg-primary w-[333px] min-h-screen rounded-tr-[30px] pl-10 pt-16 flex flex-col relative">
      <ul className="relative">
        <div onClick={toggleNav}  className="text-end w-[100%] absolute right-[-4.8em] top-[-2rem] text-4xl"><MenuIcon className="transform cursor-pointer "/></div>
        <Link
          href="/dashboard"
          active={pathname === "/dashboard" ? "true" : undefined}
        >
          <li
            className={`text-gray cursor-pointer gap-x-4 items-center flex p-5 mt-2 font-bold ${
              pathname === "/dashboard"
                ? "bg-white rounded-tl-[30px]"
                : "hover:bg-white hover:rounded-tl-[30px] hover:duration-300"
            }`}
          >
            <AiOutlineDashboard /> 
            Dashboard
          </li>
        </Link>

        <li>
          <div className="text-gray cursor-pointer mt-2 font-bold">
            <button
              onClick={toggleDropdownOne}
              className="flex gap-x-4 items-center order hover:bg-white hover:rounded-tl-[30px] p-5 w-full hover:duration-300"
            >
              <TfiWrite />
              <h1 className="text-white hover:text-gray orderText">Order</h1>
              <BsChevronDown
                className={
                  isDropdownOne ? "rotate-180 duration-300" : "duration-300"
                }
              />
            </button>
            {isDropdownOne && (
              <ul>
                <Link
                  href="/order/create_new_order"
                  active={
                    pathname === "/order/create_new_order" ? "true" : undefined
                  }
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 flex ${
                      pathname === "/order/create_new_order"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <MdOutlineCreate />
                    <span className="text-white hover:text-gray">Create New Order</span>
                  </li>
                </Link>
                <Link
                  href="/order/view_all_orders"
                  active={
                    pathname === "/order/view_all_orders" ? "true" : undefined
                  }
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 flex ${
                      pathname === "/order/view_all_orders"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <GiKnifeFork />
                    <span className="text-white hover:text-gray">View all Orders</span>
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div className="text-gray cursor-pointer  mt-2  font-bold">
            <button
              onClick={toggleDropdownTwo}
              className="flex gap-x-4 items-center order hover:bg-white hover:rounded-tl-[30px] p-5 w-full hover:duration-300"
            >
              <BsListColumnsReverse />
              <span className="text-white orderText">Product Center</span>
              <BsChevronDown
                className={
                  isDropdownTwo ? "rotate-180 duration-300" : "duration-300"
                }
              />
            </button>

            {isDropdownTwo && (
              <ul>
                <Link
                  href="/kitchen/inventory"
                  active={
                    pathname === "/kitchen/inventory" ? "true" : undefined
                  }
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 flex ${
                      pathname === "/kitchen/inventory"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <MdOutlineInventory />
                    <span className="text-white hover:text-gray">Inventory</span>
                  </li>
                </Link>
                <Link
                  href="/kitchen/procurement"
                  active={
                    pathname === "/kitchen/procurement" ? "true" : undefined
                  }
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 flex ${
                      pathname === "/kitchen/procurement"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <BsBag />
                    <span className="text-white hover:text-gray">Procurement</span>
                  </li>
                </Link>
                <Link
                  href="/kitchen/payments"
                  active={pathname === "/kitchen/payments" ? "true" : undefined}
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 flex ${
                      pathname === "/kitchen/payments"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <TbCurrencyNaira />
                    <span className="text-white hover:text-gray">Payments</span>
                  </li>
                </Link>
                <Link
                  href="/kitchen/client"
                  active={pathname === "/kitchen/client" ? "true" : undefined}
                >
                  <li
                    className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 flex ${
                      pathname === "/kitchen/client"
                        ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                        : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                    }`}
                  >
                    <RiContactsLine />
                    <span className="text-white hover:text-gray">Client</span>
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </li>

          {/* Back office */}
          <li>
          <div className="text-gray cursor-pointer  mt-2  font-bold">
            <button
              onClick={toggleDropdownThree}
              className="flex gap-x-4 items-center order hover:bg-white hover:rounded-tl-[30px] p-5 w-full hover:duration-300"
            >
              <AiOutlineStock />
              <span className="text-white orderText">Back Office</span>
              <BsChevronDown
                  className={
                    isDropdownThree ? "rotate-180 duration-300" : "duration-300"
                  }
                />
              </button>
                  {
                    isDropdownThree &&
                    <ul>
                      <Link
                        href="/back_office/schedule"
                        active={pathname === "/back_office/schedule" ? "true" : undefined}
                      >
                        <li
                          className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 flex ${
                            pathname === "/back_office/schedule"
                              ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                              : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                          }`}
                        >
                          <MdOutlineInventory />
                          <span className="text-white hover:text-gray">Schedule</span>
                        </li>
                      </Link>
                      <Link
                        href="/back_office/vendor"
                        active={pathname === "/back_office/vendor" ? "true" : undefined}
                      >
                        <li
                          className={`items-center gap-x-4 cursor-pointer p-2 px-5 mt-2 flex ${
                            pathname === "/back_office/vendor"
                              ? "bg-white rounded-tl-[30px] rounded-br-[30px] w-[219px]"
                              : "hover:bg-white hover:rounded-tl-[30px] hover:rounded-br-[30px] hover:w-[219px] "
                          }`}
                        >
                          <MdOutlineInventory />
                          <span className="text-white hover:text-gray">Vendor</span>
                        </li>
                      </Link>
                    </ul>
                  }
            </div>
          </li>

                  
        <Link href="/settings/profile">
          <li className="order cursor-pointer gap-x-4 items-center flex p-5 hover:bg-white hover:rounded-tl-[30px] mt-2 hover:duration-300 font-bold">
            <AiOutlineSetting />
            <span className="text-white orderText">Settings</span>
          </li>
        </Link>

        {/* help desk */}
        <Link href="/#">
          <li className="text-gray cursor-pointer order gap-x-4 items-center flex p-5 hover:bg-white hover:rounded-tl-[30px] mt-2 hover:duration-300 font-bold">
            <FiPhone />
            <span className="text-white orderText">Help Desk</span>
          </li>
        </Link>
      </ul>
      <ul
      onClick={handleLogout}
       className="w-full justify-self-end order">
        <li className="text-white orderText cursor-pointer gap-x-4 items-center flex p-5 hover:bg-white hover:rounded-tl-[30px] mt-2 hover:duration-300 font-bold">Log Out</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
