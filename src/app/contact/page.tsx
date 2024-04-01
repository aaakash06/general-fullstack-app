import React from 'react'
import Image from 'next/image'
const Contact = () => {
  return (
    <>
    <h1 className='text-center text-5xl poppins text-sky-400  font-bold lg:hidden'>Contact</h1>
     <div className='flex '>

<div className="left flex-1 relative  max-lg:hidden" >
<Image alt='contactPng' className='object-contain' src="/contact.png" fill></Image>

</div>
<div className="right flex-1 flex flex-col justify-center">
<form action="" className=' flex flex-col gap-3'>
<input className='w-full bg-slate-800 p-3  rounded-sm outline-none border-none' type="text" placeholder='Username'/>
<input className='w-full bg-slate-800 p-3  rounded-sm outline-none border-none' type="email" placeholder='Email Adress'/>
<input className='w-full bg-slate-800 p-3  rounded-sm outline-none border-none' type="text" placeholder='Phone Number(optional)'/>
<textarea className='w-full bg-slate-800 p-3  rounded-sm outline-none border-none ' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
<button className='w-full bg-blue-500 p-2  rounded-sm outline-none border-none'> Send</button>
</form>


</div>
    </div></>
   
  )
}

export default Contact