import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full flex'>
      <div className="left flex-[1.5] flex flex-col justify-around ">
      <div className=" flex flex-col gap-[50px] max-lg:text-center">
<h2 className='text-2xl font-bold text-sky-400'>About Agency</h2>
<h1 className='text-6xl font-bold poppins'>We create digital ideas that are bigger, bolder, braver, and better.</h1>

<p className='poppins text-gray-300'>We create digital ideas that are bigger, bolder, braver, and better.We believ in good ideas flexibility and precission. We're world's our special Team best consulting and finance solution provider. Wide range of web and software devlopment services.</p>

<div className="acheivements flex gap-20 poppins max-lg:justify-center max-sm:flex-col ">
<div className="one">
  <h3 className='text-3xl text-sky-600'>10K+</h3>
  <p className='text-sm text-gray-400'>Year of experience</p>
</div>
<div className="two">
  <h3 className='text-3xl text-sky-600'>10K+</h3>
  <p className='text-sm text-gray-400'> Year of experience</p>
</div>
<div className="three">
<h3 className='text-3xl text-sky-600'>10K+</h3>
    <p  className='text-sm text-gray-400'>Year of experience</p>

</div>
</div>

    </div>
      </div>
  

<div className="right flex-1 relative max-lg:hidden ">
<Image alt='aboutPng' className='object-contain' src='/about.png' fill></Image>
</div>

    </div>
  )
}

export default About