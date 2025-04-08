import Image from "next/image";
import logo from "/public/images/brand_logo/logo1.png";
import chat from "/public/images/icons/chat.svg";
import gift from "/public/images/icons/gift.svg";
import Notification from "../topbar/Notification";
import React, { useState, useEffect } from "react";
import profileImg from '/public/images/profile-img-mock.png'; // Fallback profile image

export default function Topbar({ data }) {
  const [greeting, setGreeting] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // State for profile image

  // Load profile image from localStorage when component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  }, []);

  useEffect(() => {
    const getGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    };

    getGreeting();
  }, []);

  return (
    <div className="h-[10%] flex justify-between mx-20 items-center">
      <div className="my-2">
        <Image
          src={logo}
          alt="dinerPro_logo"
          style={{ objectFit: "cover" }}
          width={100}
          height={100}
        />
      </div>
      <div className="flex gap-4 ml-auto mr-14">
        <Notification />

        <Image
          src={chat}
          alt="chat"
          style={{ objectFit: "cover" }}
          width={25}
          height={25}
        />
        <Image
          src={gift}
          alt="gift"
          style={{ objectFit: "cover" }}
          width={25}
          height={25}
        />
      </div>
      <div className="h-[50px] bg-black w-[1px] mx-3"></div>
      <div className="flex gap-3">
        <div>
          <h1 className="cursor-pointer">{greeting}</h1>
          <h4>{data.firstName}</h4>
        </div>
        <div className="w-[50px] h-[50px] rounded-full border text-center flex items-center justify-center overflow-hidden">
          <Image
            src={selectedImage || profileImg} // Use selected image or fallback to the default profile image
            alt="Profile Image"
            width={50}
            height={50}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
