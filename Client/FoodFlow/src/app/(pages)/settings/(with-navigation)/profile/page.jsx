'use client'
import Input_Text from "@/components/form-inputs/Input_Text";
import ProfileImage from "@/components/profile/ProfileImage";
import { Form, Formik } from "formik";

export default function page() {
    
  return (
    <>
        <ProfileImage/>

        <div className="mt-10 mb-2">
            <h2 className="font-bold">Personal Details</h2>
              <Formik>
                <Form>
                  <div className="flex flex-col gap-4 pt-10">
                    <div className="flex gap-6 w-[550px]">
                      <Input_Text
                      name={'firstName'}
                      placeholder={'lana'}
                      label={'First name'}
                        className=" rounded-lg placeholder:pl-2"
                        gap="gap-1"/>

                      <Input_Text
                      name={'LastName'}
                      placeholder={'peters'}
                      label={'Last name'}
                        className=" rounded-lg placeholder:pl-2"
                        gap="gap-1"/>
                    </div>

                    <div className="flex gap-6 w-[550px]">
                      <Input_Text
                      name={'email'}
                      placeholder={'Lanapeters@gmail.com'}
                      label={'Email'}
                        className=" rounded-lg placeholder:pl-2"
                        gap="gap-1"/>

                      <Input_Text
                      name={'phoneNum'}
                      placeholder={'+2345678587885'}
                      label={'Phone number'}
                        className=" rounded-lg placeholder:pl-2"
                        gap="gap-1"/>
                    </div>

                    <div className="flex gap-6 w-[550px]">
                      <Input_Text
                      name={'state'}
                      placeholder={'lagos'}
                      label={'State'}
                        className=" rounded-lg placeholder:pl-2"
                        gap="gap-1"/>

                      <Input_Text
                      name={'address'}
                      placeholder={'lagos island'}
                      label={'Address'}
                        className=" rounded-lg placeholder:pl-2"
                        gap="gap-1"/>
                    </div>
                  </div>
                </Form>
              </Formik>
        </div>

        <div className="w-[550px] flex justify-center mt-20">
          <div className=" flex gap-4 ">
            <button className="w-36 h-8 border border-red-500 rounded-3xl text-sm">Discard changes</button>
            <button className="w-36 h-8 border border-primary rounded-3xl text-sm">Save changes</button>
          </div>
        </div>
    </>
  )
}
