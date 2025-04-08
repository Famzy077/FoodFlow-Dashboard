'use client'
import { Form, Formik } from "formik";
import Select from "../form-inputs/Select";
import Input_Text from "../form-inputs/Input_Text";

export default function BookingSetting() {
  return (
    <Formik>
        <Form>
            <Select
            name='selectBooking'
            label='Booking system'
            className="rounded-l-lg pl-16"
            >
                <option value="">Select booking system type</option>
            </Select>

            <Input_Text
            name='noDaysToDeliver' 
            placeholder='Enter number of days'
            label='Number of days to deliver'
            className=" rounded-l-lg placeholder:pl-16"
            gap="gap-1"
            />
        </Form>
    </Formik>
  )
}
