import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Home = () => {
  return (
    <>

       <div className='flex    max-md:text-center '>

<div className="left flex-1 flex flex-col gap-20 justify-center  relative mb-15 ">
<h1 className='text-[70px] leading-snug [word-spacing:200px] font-extrabold max-sm:text-[50px] poppins '> Creativity Thoughts Agency</h1>
<div className="text">
<p className='flexx mb-3 roboto'>Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.</p>
<h4 className='font-bold'> -Swami Vivekanand</h4>
</div>

<div className="button flex gap-10 max-md:justify-center poppins">
<Link href='#' className='bg-sky-500  py-3 px-6  rounded-xl  font-bold ' >Learn More</Link>
<Link href='#' className=' bg-white text-black py-3 px-8    font-bold rounded-xl'>Contact</Link>

</div>
</div>

<div className="right relative flex-1 max-md:hidden">

<Image src="/homeImage.png" alt='homeImage' className='object-contain' sizes='100%' fill ></Image>

</div>
    </div></>
 
  )
}

export default Home