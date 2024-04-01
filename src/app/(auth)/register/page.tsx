

import { handleRegister } from '@/lib/serverActions'
import Link from 'next/link'
import React from 'react'


const Login = () => {


  return (
    <div className='flex items-center flex-col gap-5'>
<form action={handleRegister} className='flex flex-col w-[70%] gap-10 bg-neutral-300 p-10 rounded-xl pb-[7rem]'>
  <h1 className='text-black text-3xl text-center font-extrabold poppins '>Register</h1>
<input type="text" placeholder='E-mail' className='bg-slate-800 rounded-xl p-3 outline-none border' name='email' />
<input type="password" placeholder='Password' className='bg-slate-800 rounded-xl p-3 outline-none border' name='password' />
<button className='bg-sky-500 rounded-xl p-3 outline-none border w-[50%] mx-auto ' > Submit</button>
</form>

    </div>
  )
}

export default Login