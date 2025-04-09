// "use client";

// import RoundedMdBtn from "@/components/button/RoundedMdBtn";
// import Input_Text from "@/components/form-inputs/Input_Text";
// import { Form, Formik } from "formik";
// import Image from "next/image";
// import Link from "next/link";
// import { BsEyeSlash } from "react-icons/bs";
// import { MdFacebook } from "react-icons/md";
// import googleIcon from "/public/images/auth/Google.png";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import AuthService from "@/services/AuthService";
// import { useMutation } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { BiShow } from "react-icons/bi";
// import Spinner from "@/components/indicators/Spinner";

// export default function Page() {
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
//   const initialValues = { email: "", password: "" };

//   const handlePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const { mutate, isLoading, data } = useMutation({
//     mutationKey: "login-seller",
//     mutationFn: AuthService.login,
//     onSuccess: (data) => {
//       toast.success(`Welcome ${data.data.user.firstName}`);
//       if (typeof window !== "undefined") {
//         localStorage.setItem("auth_token", data?.data?.accessToken);
//         localStorage.setItem("refresh_token", data?.data?.refreshToken);
//         localStorage.setItem("my-data", JSON.stringify(data?.data?.user));
//       }
//       router.push("/dashboard");
//     },
//   });

//   const handleRouting = (values) => {
//     if (typeof window !== "undefined") {
//       //////console.logog(values);
//       mutate(values);
//     }
//   };

//   return (
//     <>
//       <h1 className="font-semi-bold text-2xl">Welcome back to DinerPro</h1>
//       {isLoading && <Spinner />}
//       <Formik initialValues={initialValues} onSubmit={handleRouting}>
//         <Form>
//           <div className="flex flex-col gap-5">
//             <Input_Text
//               name="email"
//               rounded="rounded-md"
//               className="placeholder:pl-2 placeholder:text-[#4B5B65]"
//               placeholder="Email address/ Unique Identification Number"
//             />

//             <div className="relative">
//               <Input_Text
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 rounded="rounded-md"
//                 className="placeholder:pl-2 placeholder:text-[#4B5B65]"
//                 placeholder="Password"
//               />
//               <div className="absolute bg-white w-20 flex justify-center items-center bottom-0.5 h-11 right-0.5 text-[#4B5B65]">
//                 <div
//                   className="cursor-pointer"
//                   onClick={handlePasswordVisibility}
//                 >
//                   {showPassword ? <BsEyeSlash /> : <BiShow size={20} />}
//                 </div>
//               </div>
//             </div>

//             <RoundedMdBtn
//               type="submit"
//               bg="bg-[#FF8213]"
//               width="w-full"
//               height="h-10"
//               content="Login"
//             />
//           </div>
//         </Form>
//       </Formik>

//       <div className="flex justify-between items-center">
//         <div className="flex gap-3 items-center">
//           <input type="checkbox" name="rememberMe" id="rememberMe" />
//           <span>Remember me</span>
//         </div>
//         <div>Forgot password?</div>
//       </div>

//       <div className="w-full relative">
//         <hr />
//         <div className="bg-white absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
//           or continue with
//         </div>
//       </div>

//       <div className="flex gap-6 mx-auto">
//         <RoundedMdBtn
//           bg=""
//           border="border"
//           borderColor="secondary"
//           height="h-10"
//           color="[#4B5B65]"
//           content={
//             <div className="flex justify-center items-center gap-2">
//               <Image src={googleIcon} width={14} height={14} alt="google" />
//               Google
//             </div>
//           }
//         />
//         <RoundedMdBtn
//           bg=""
//           border="border"
//           color="[#4B5B65]"
//           borderColor="secondary"
//           height="h-10"
//           content={
//             <div className="flex justify-center items-center gap-2">
//               <MdFacebook size={20} color="blue" />
//               Facebook
//             </div>
//           }
//         />
//       </div>
//       <div className="text-[#4B5B65] flex items-center gap-2 mx-auto">
//         Dont you have an account?{" "}
//         <Link href="/register-seller" className="text-[#FF8213]">
//           Create account
//         </Link>
//       </div>
//     </>
//   );
// }

"use client";

import RoundedMdBtn from "@/components/button/RoundedMdBtn";
import Input_Text from "@/components/form-inputs/Input_Text";
import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { BsEyeSlash } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import googleIcon from "/public/images/auth/Google.png";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AuthService from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { BiShow } from "react-icons/bi";
import Spinner from "@/components/indicators/Spinner";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const initialValues = { email: "", password: "" };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { mutate, isLoading, data } = useMutation({
    mutationKey: "login-seller",
    mutationFn: AuthService.login,
    // onSuccess: (data) => {
    //   toast.success(`Welcome ${data.data.user.firstName}`);
    //   router.push("/dashboard");
    // },

    onSuccess: (data) => {
      toast.success(data.message || "Login successful");
      localStorage.setItem("auth_token", data.token);
      router.push("/dashboard");
    },
  });

  useEffect(() => {
    if (data && typeof window !== "undefined") {
      localStorage.setItem("auth_token", data?.token);
      // Only store user if it exists
      if (data?.user) {
        localStorage.setItem("my-data", JSON.stringify(data?.user));
      }
    }
  }, [data]);

  // useEffect(() => {
  //   if (data && typeof window !== "undefined") {
  //     localStorage.setItem("auth_token", data?.data?.accessToken);
  //     localStorage.setItem("refresh_token", data?.data?.refreshToken);
  //     localStorage.setItem("my-data", JSON.stringify(data?.data?.user));
  //   }
  // }, [data]);

  const handleRouting = (values) => {
    //////console.logog(values);
    mutate(values);
  };

  return (
    <>
      <h1 className="font-semi-bold text-2xl">Welcome back to DinerPro</h1>
      {isLoading && typeof window !== "undefined" && <Spinner />}
      <Formik initialValues={initialValues} onSubmit={handleRouting}>
        <Form>
          <div className="flex flex-col gap-5">
            <Input_Text
              name="email"
              rounded="rounded-md"
              className="placeholder:pl-2 placeholder:text-[#4B5B65]"
              placeholder="Email address/ Unique Identification Number"
            />

            <div className="relative">
              <Input_Text
                type={showPassword ? "text" : "password"}
                name="password"
                rounded="rounded-md"
                className="placeholder:pl-2 placeholder:text-[#4B5B65]"
                placeholder="Password"
              />
              <div className="absolute bg-white w-20 flex justify-center items-center bottom-0.5 h-11 right-0.5 text-[#4B5B65]">
                <div
                  className="cursor-pointer"
                  onClick={handlePasswordVisibility}
                >
                  {showPassword ? <BsEyeSlash /> : <BiShow size={20} />}
                </div>
              </div>
            </div>

            <RoundedMdBtn
              type="submit"
              bg="bg-[#FF8213]"
              width="w-full"
              height="h-10"
              content="Login"
            />
          </div>
        </Form>
      </Formik>

      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <span>Remember me</span>
        </div>
        <div>Forgot password?</div>
      </div>

      <div className="w-full relative">
        <hr />
        <div className="bg-white absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
          or continue with
        </div>
      </div>

      <div className="flex gap-6 mx-auto">
        <RoundedMdBtn
          bg=""
          border="border"
          borderColor="secondary"
          height="h-10"
          color="[#4B5B65]"
          content={
            <div className="flex justify-center items-center gap-2">
              <Image src={googleIcon} width={14} height={14} alt="google" />
              Google
            </div>
          }
        />
        <RoundedMdBtn
          bg=""
          border="border"
          color="[#4B5B65]"
          borderColor="secondary"
          height="h-10"
          content={
            <div className="flex justify-center items-center gap-2">
              <MdFacebook size={20} color="blue" />
              Facebook
            </div>
          }
        />
      </div>
      <div className="text-[#4B5B65] flex items-center gap-2 mx-auto">
        Dont you have an account?{" "}
        <Link href="/register-seller" className="text-[#FF8213]">
          Create account
        </Link>
      </div>
    </>
  );
}