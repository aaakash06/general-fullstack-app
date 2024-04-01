"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { handlePost } from '../../../lib/serverActions'
const CreatePost = () => {
  const router = useRouter();
  

function action(formData){
handlePost(formData); 

router.push('/blog')

}

  return (
    <div className='flex items-center flex-col gap-5'>
<form action={action} className='flex flex-col w-[70%] gap-10 bg-neutral-300 p-10 rounded-xl pb-[7rem]'>
  <h1 className='text-black text-3xl text-center font-extrabold poppins '>Create a post</h1>
<input type="text" placeholder='Title' className='bg-slate-800 rounded-xl p-3 outline-none border' name='title' />
<input type='text' placeholder='desc' className='bg-slate-800 rounded-xl p-3 outline-none border' name='desc' />

<input type='text' placeholder='img' className='bg-slate-800 rounded-xl p-3 outline-none border' name='img' />
<input type='text' placeholder='slug' className='bg-slate-800 rounded-xl p-3 outline-none border' name='slug'/>
<button  className='bg-sky-500 rounded-xl p-3 outline-none border w-[50%] mx-auto ' > Submit</button>
</form>
</div>

  )
}

export default CreatePost