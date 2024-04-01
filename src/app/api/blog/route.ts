import { NextResponse } from "next/dist/server/web/spec-extension/response";
import { connectToDB } from "../../../lib/connect";
import { Post } from "../../../lib/models";

export async function GET(request) {
  // call for get all posts
  try {
    await connectToDB();
console.log('connceted to db')
    let allPosts = await Post.find();
    return NextResponse.json(allPosts);
  } catch (err) {
    console.log("error occured: ");
    throw new Error("some error occured using crud in DB");
  }
}
export async function POST(request) {
  // posting a post in DB
  let req = await request.json();
  console.log(req);

  try {
    await connectToDB();
    Post.create(req);
    console.log("post saved");
  } catch (err) {
    console.log("error occured: ", err);
    throw new Error("some error occured using crud in DB");
  }

  return NextResponse.json(req);
}
