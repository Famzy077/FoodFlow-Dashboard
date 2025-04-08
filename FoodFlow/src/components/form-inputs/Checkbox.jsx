'use client'
import { ErrorMessage, Field } from "formik";

export default function Checkbox({label='',hasLabel=true,row=true ,name='', gap='gap-4',}) {
  return (
    <div className={`flex ${row?'items-center':'flex-col justify-center'} ${gap}`}>
        <div className={`flex flex-col gap-2 ${row?'items-center':''}`}>
          <Field type='checkbox'name={name} className={`border border-zinc-300 outline-none px-1`}/>
          <ErrorMessage name={name}>{err=><div className="text-red-600">{err}</div>}</ErrorMessage>
        </div>
      <label htmlFor={name} className="text-lg font-bold flex items-center gap-2">{label}</label>
    </div>
  )
}