'use client'
import { ErrorMessage, Field } from "formik";

export default function TextArea({label, placeholder, name, className='placeholder:pl-2', gap='gap-4'}) {
  return (
    <div className={`flex flex-col ${gap} w-full`}>
        <label htmlFor={name}>{label}</label>
        <Field
         as='textarea'
          placeholder={placeholder}
           className={`border border-zinc-300 outline-none w-full h-24 p-2 ${className}`}
            />
        <ErrorMessage name={name}>{err=><div className="text-red-600">{err}</div>}</ErrorMessage>
    </div>
  )
}
