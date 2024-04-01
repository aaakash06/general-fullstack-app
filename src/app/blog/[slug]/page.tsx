import React from "react";
import Image from "next/image";

async function getThePost(slug: string) {
  try {
    let res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    let thePostt = await res.json();
    return thePostt;
  } catch (err) {
    console.log("the error is : ", err);
    throw new Error("some error occured");
  }
}

const SinglePost = async ({ params }) => {
  const { slug } = params;

  let thePost = await getThePost(slug);

  return (
    <div className="flex border- h-[50%]  border-white w-full max-md:flex-col ">
      <div className="left relative flex-1 max-lg:flex-[2] ">
        <Image alt="blogImage" className="object-cover" src={`${thePost.img? 
         thePost.img : 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'}`} fill></Image>
      </div>
      
      <div className="right  pl-20 pt-10 flex-[1.5]  flex flex-col gap-10 ">
        <div className="top">
          <h1 className="text-5xl font-extrabold  roboto">{thePost.title}</h1>
        </div>
        <div className="middle flex gap-10 max-md:gap-5">
          <Image className="object-contain"
            alt="blogImage"
            src="/noavatar.png"
            width={50}
            height={50}
          ></Image>
          <div className="lef flex flex-col">
            <span className="text-zinc-500 ">Author</span>
            <span>Aakash Don</span>
          </div>
          <div className="righ flex flex-col">
            <span className="text-zinc-500">Published</span>
            <span>{thePost.createdAt?.toString().slice(0, 10)}</span>
          </div>
        </div>
        <div className="bottom">
          <span className="text-zinc-500">{thePost.desc}</span>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
