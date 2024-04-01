import React from "react";
import BlogPost from "../../componenets/blog_post/blogPost";
// import { getPosts } from "@/lib/serverActions";

// fetching without api
const Blog = async () => {
//   let posts = await getPosts();
let res= await fetch('http://localhost:3000/api/blog',{cache: "no-store"}); 

let posts = await res.json(); 
console.log("post successfully received")


  return (
    <div className=" grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-4 ">
      {posts.map((post) => {
        return <BlogPost key={post.title} post={post}/> ;
      })}
    </div> 
  );
};

export default Blog;
