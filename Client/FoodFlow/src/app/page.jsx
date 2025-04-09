// 'use client'
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { AiOutlineLoading } from "react-icons/ai";

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       // Corrected: Use localStorage.getItem instead of localStorage.getitemId
//       const token = localStorage.getItem('auth_token');
//       //console.log('Retrieved Token:', token);
//       if (token) {
//         router.push('/dashboard');
//       } else {
//         router.push('/login');
//       }
//     }
//   }, [router]);

//   return (
//     <div className="w-screen h-screen flex justify-center items-center">
//       <AiOutlineLoading className="animate-spin" size={40} />
//     </div>
//   );
// }

'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

export default function Home() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this code only runs on the client
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      ////////////console.logogogogogogogogogogog('Retrieved Token:', token);
      if (token) {
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    }
  }, [router]);

  if (!isClient) {
    return null; // Don't render anything until the component is mounted on the client
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <AiOutlineLoading className="animate-spin" size={40} />
    </div>
  );
}
