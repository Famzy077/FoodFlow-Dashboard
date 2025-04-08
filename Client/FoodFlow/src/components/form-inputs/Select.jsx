'use client'
import { ErrorMessage, Field } from 'formik'

export default function Select({name='',label='',children,row=false,hasLabel=true, width='w-full', inputWidth='w-full', gap='gap-1',className='pl-2', rounded='', height='h-12'}) {
  return (
    <div className={`flex ${row?'items-center':'flex-col'} ${gap} ${row?'w-full':width}`}>
        {hasLabel &&<label htmlFor={name} className={`${row?'justify-self-start w-[80px]':''}`}>{label}</label>}
        <div className={`flex flex-col gap-2 ${row?'':''} ${inputWidth}`}>
          <Field name={name} as='select' className={`border border-zinc-300 outline-none w-full px-1 ${rounded} ${height} cursor-pointer ${className}`}>
              {children}
          </Field>
          <ErrorMessage name={name}>{err=><div className="text-red-600">{err}</div>}</ErrorMessage>
        </div>
    </div>
  )
}
