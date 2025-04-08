'use client'
import { ErrorMessage, Field } from "formik";

export default function Input_Text({label='',icon_placeholder=false,placeholder_icon=null, type='text',hasLabel=true, placeholder='', row=false ,name='', className='placeholder:pl-2', gap='gap-4', height='h-12', rounded='', width='w-full'}) {
  return (
    <div className={`flex ${row?'items-center':'flex-col justify-center'} ${gap} w-full `}>
      {hasLabel && <label htmlFor={name} className={`${row?'place-items-start w-[80px]':''}`}>{label}</label>}
        <div className={`flex flex-col gap-2 ${row?'items-center':''} relative`}>
          {icon_placeholder && placeholder_icon}
          <Field type={type} placeholder={placeholder} name={name} className={`border border-zinc-300 outline-none ${width} ${height} ${rounded} px-1 ${className}`}/>
          <ErrorMessage name={name}>{err=><div className="text-red-600">{err}</div>}</ErrorMessage>
        </div>
    </div>
  )
}
