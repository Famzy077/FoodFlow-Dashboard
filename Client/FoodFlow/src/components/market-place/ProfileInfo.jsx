'use client'
import { Form, Formik } from "formik";
import Input_Text from "../form-inputs/Input_Text";
import Select from "../form-inputs/Select";
import TextArea from "../form-inputs/TextArea";

export default function ProfileInfo() {
  return (
    <Formik>
      <Form>
        {/* <div> */}
            <Input_Text
            name={'businessProfileName'}
              placeholder={'Enter business name'}
              label={'Name of business profile'}
                className=" rounded-l-lg placeholder:pl-16"
                gap="gap-1"/>

            <Select
             name={'businessCategory'}
              label='Business category'
               className="pl-16 text-zinc-400">
              <option value="">Select business category type</option>
            </Select>

            <Select
             name={'businessSubCategory'}
              label='Sub-category'
               className="pl-16 text-zinc-400">
              <option value="">Select sub-category type</option>
            </Select>

            <TextArea
            name={'businessDescription'}
              placeholder={'Enter business description'}
              label={'Business description'}
                className=" rounded-l-lg placeholder:pl-16"
                gap="gap-1"/>

            <Input_Text
            name={'operatorName'}
              placeholder={'Enter Profile name'}
              label={"operator's name"}
                className=" rounded-l-lg placeholder:pl-16"
                gap="gap-1"/>
        {/* </div> */}
      </Form>
    </Formik>
  )
}
