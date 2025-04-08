'use client'
import Image from 'next/image'
import coverImage1 from '/public/images/auth/auth-coverImage1.png'
import coverImage2 from '/public/images/auth/auth-coverImage2.png'

import { usePathname } from "next/navigation"

export default function AuthCoverImage() {
    const pathname = usePathname()

  return (
    <Image
        src={pathname == '/register-seller'? coverImage1:coverImage2}
        alt=""
        width={500}
        height={500}
        className="w-full h-full object-cover"
        quality={100}
    />
  )
}
