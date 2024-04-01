import React from 'react'
import Image from 'next/image'
import styles from './blogPost.module.css'
import Link from 'next/link'

interface postType {
title: string;
author: string;
desc: string;

}

interface propType {
post: postType ;

}

const BlogPost = ({post}) => {
  return (
    <div className={styles.post}>

<div className={` ${styles.top} flex `}>
<div className={styles.ImageContainer}>
<Image className='img' alt='blogPng'  src={`${post.img? 
         post.img : 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'}`}  fill></Image>
</div>
<div className={styles.spanCont}>
<h1 className={styles.span}>{post.createdAt?.toString().slice(0,10)}</h1>
</div>

</div>
<div className={styles.bottom}>
  <h1>{post.title}</h1>
  <p className={styles.desc}>{post.desc}</p>
  <Link href={`/blog/${post.slug}`} className={styles.read}>Read More</Link>
</div>
    </div>
  )
}

export default BlogPost