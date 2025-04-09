"use client";
import Input_Text from "@/components/form-inputs/Input_Text";
import Select from "@/components/form-inputs/Select";
import TextArea from "@/components/form-inputs/TextArea";
// import { apiRequests } from "@/lib/api/ApiRequests";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useState } from "react";

export default function page() {
  // const { mutate } = useMutation(apiRequests.POST());
  const [menuData, setMenuData] = useState({
    menuName: "",
    menuPrice: "",
    menuCategory: "",
    menuDescription: "",
    menuIngridents: [],
  });

  const onSubmit = (values) => {
    //console.log(values);
  };
  return (
    <Formik initialValues={menuData} onSubmit={onSubmit}>
      <Form>
        <Input_Text
          name='menuName'
          placeholder='Enter menu name'
          label='Name of menu'
          className=' rounded-l-lg placeholder:pl-16'
          gap='gap-1'
        />

        <Input_Text
          name='menuPrice'
          placeholder='Enter price'
          label='Price'
          className=' rounded-l-lg placeholder:pl-16'
          gap='gap-1'
        />

        <Select
          name='category'
          className=' rounded-l-lg placeholder:pl-16'
          gap='gap-1'
          label='Category'
        >
          <option value=''>select category type</option>
        </Select>

        <TextArea
          name='description'
          placeholder='Enter item description'
          className=' rounded-l-lg placeholder:pl-16'
          gap='gap-1'
          label='Price'
        />

        <TextArea
          name='ingredients'
          placeholder='Enter ingredients description'
          className=' rounded-l-lg placeholder:pl-16'
          gap='gap-1'
          label='Price'
        />

        <div className='max-w-[720px] w-full flex justify-center mt-auto'>
          <div className=' flex gap-4 mt-4'>
            <button className='w-36 h-8 border border-[#FE370C] rounded-3xl text-sm'>
              Discard changes
            </button>
            <button className='w-36 h-8 border border-primary rounded-3xl text-sm'>
              Save changes
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
