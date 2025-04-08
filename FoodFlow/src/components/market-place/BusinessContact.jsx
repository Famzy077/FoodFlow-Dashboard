'use client'
import { Form, Formik } from "formik";
import Input_Text from "../form-inputs/Input_Text";

export default function BusinessContact() {
  return (
    <Formik>
        <Form>
            <Input_Text
            name={'phoneNumber'}
              placeholder={'Enter phone number'}
              label={'Phone number'}
                className=" rounded-l-lg placeholder:pl-16"
                gap="gap-1"/>

            <Input_Text
            name={'emailAddress'}
              placeholder={'Enter Email Address'}
              label={'Email addres'}
                className=" rounded-l-lg placeholder:pl-16"
                gap="gap-1"/>

            <Input_Text
            name={'Instagram'}
              placeholder={'Enter Instagram URL'}
              label={'Phone number'}
                className=" rounded-l-lg placeholder:pl-16"
                gap="gap-1"/>

            <Input_Text
            name={'facebook'}
              placeholder={'Enter Facebook URL'}
              label={'Facebook'}
                className=" rounded-l-lg placeholder:pl-16"
                gap="gap-1"/>

            <Input_Text
            name={'twitter'}
              placeholder={'Enter Twitter URL'}
              label={'Twitter'}
                className=" rounded-l-lg placeholder:pl-16"
                gap="gap-1"/>

            <Input_Text
            name={'webAddress'}
              placeholder={'Enter weblink'}
              label={'Web address'}
                className=" rounded-l-lg placeholder:pl-16"
                gap="gap-1"/>

            <Input_Text
            name={'businessAddress'}
              placeholder={'Enter business address'}
              label={'Business address'}
                className=" rounded-l-lg placeholder:pl-16"
                gap="gap-1"/>
        </Form>
    </Formik>
  )
}
