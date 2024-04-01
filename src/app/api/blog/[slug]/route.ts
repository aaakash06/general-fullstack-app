import { NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/connect";
import { Post } from "../../../../lib/models";

export async function GET(request,{params}) {

  const {slug} =params; 
  // call for getOnPost
  try {
    await connectToDB();

    let thePost = await Post.findOne({slug});
    if(thePost)  return NextResponse.json(thePost);
   return new Response('no post with the given slug was found'); 
  } catch (err) {
    console.log("error occured: ", err);
    throw new Error("some error occured using crud in DB");
  }
}