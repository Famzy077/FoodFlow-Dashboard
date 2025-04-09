"use client";
import RoundedMdBtn from "@/components/button/RoundedMdBtn";
import Input_Text from "@/components/form-inputs/Input_Text";
import Select from "@/components/form-inputs/Select";
import { Form, Formik } from "formik";
import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import googleIcon from "/public/images/auth/Google.png";
import { BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthService from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useState } from "react";
import { BiShow } from "react-icons/bi";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const router = useRouter();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    // businessName: '',
    password: "",
    type: "",
  };

  const { mutate, isLoading, data } = useMutation({
    mutationKey: "register-seller",
    mutationFn: AuthService.register,
    onSuccess: () => {
      toast.success("Registration successful");
      router.push("/login");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      //console.logog(error.response.data.message);
    },
  });

  const handleRouting = (values) => {
    mutate(values);
  };

  return (
    <>
      <h1 className='font-semi-bold text-2xl'>Welcome to DinerPro</h1>
      {/* <RoundedMdBtn
        bg=''
        border='border'
        borderColor=''
        width='w-[380px]'
        content={
          <div className='flex w-full cursor-pointer'>
            <div className='w-1/2 flex justify-center items-center text-black border h-10 border-[#FF8213]  rounded-l-md'>
              Sign up as buyer
            </div>
            <div className='w-1/2 flex justify-center items-center bg-[#FF8213] text-white h-10 rounded-r-md'>
              Sign up as seller
            </div>
          </div>
        }
      /> */}

      <Formik initialValues={initialValues} onSubmit={handleRouting}>
        <Form>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-4'>
              <Input_Text
                name='firstName'
                className='placeholder:pl-2 placeholder:text-[#4B5B65]'
                rounded='rounded-md'
                placeholder='First name'
              />
              <Input_Text
                name='lastName'
                rounded='rounded-md'
                className='placeholder:pl-2 placeholder:text-[#4B5B65]'
                placeholder='last name'
              />
            </div>
            <Input_Text
              name='email'
              rounded='rounded-md'
              className='placeholder:pl-2 placeholder:text-[#4B5B65]'
              placeholder='Email address'
            />
            {/* <Input_Text
              name='businessName'
              rounded='rounded-md'
              className='placeholder:pl-2 placeholder:text-[#4B5B65]'
              placeholder='Business name'
            /> */}

            <div className='relative'>
              <Input_Text
                type={showPassword ? "text" : "password"}
                name='password'
                rounded='rounded-md'
                className='placeholder:pl-2 placeholder:text-[#4B5B65]'
                placeholder='Password'
              />
              <div className='absolute bg-white w-20 flex justify-center items-center bottom-0.5 h-11 right-0.5 text-[#4B5B65]'>
                <div
                  className='cursor-pointer'
                  onClick={handlePasswordVisibility}
                >
                  {showPassword ? <BsEyeSlash /> : <BiShow size={20} />}
                </div>
              </div>
            </div>
            <Select rounded='rounded-md' name='type'>
              <option value=''>Category of seller</option>
              <option value='restaurant'>Restuarant</option>
              <option value='chef'>Chef</option>
              <option value='foodSupplier'>Food supplier</option>
              <option value='corporateEnterprise'>Corporate Enterprise</option>
              <option value='individual'>Individual</option>
            </Select>

            <RoundedMdBtn
              type='submit'
              bg='bg-[#FF8213]'
              width='w-full'
              height='h-10'
              content={isLoading ? "loading..." : "Create an account"}
            />
          </div>
        </Form>
      </Formik>
      <div className='w-full relative'>
        <hr />
        <div className='bg-white absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4'>
          {" "}
          or continue with
        </div>
      </div>

      <div className='flex gap-6 mx-auto'>
        <RoundedMdBtn
          bg=''
          border='border'
          borderColor='secondary'
          height='h-10'
          color='[#4B5B65]'
          content={
            <div className='flex justify-center items-center gap-2'>
              <Image src={googleIcon} width={14} height={14} alt='google' />
              Google
            </div>
          }
        />
        <RoundedMdBtn
          bg=''
          border='border'
          color='[#4B5B65]'
          borderColor='secondary'
          height='h-10'
          content={
            <div className='flex justify-center items-center gap-2'>
              <MdFacebook size={20} color='blue' />
              Facebook
            </div>
          }
        />
      </div>
      <div className='text-[#4B5B65] flex items-center gap-2 mx-auto'>
        Already have an account?{" "}
        <Link href='/login' className='text-[#FF8213]'>
          Login
        </Link>
      </div>
    </>
  );
}
