"use server"

const mongoose = require('mongoose')
import { connectToDB } from "./connect";
import { Post, User } from "./models";
import { useRouter } from "next/navigation";



export async function handleOnClick() {
  await connectToDB();
  let Tour = mongoose.models.tours;
  let users = await User.find();
  console.log(users);
}

export async function handleRegister(formData) {
  connectToDB();
  const { email, password } = Object.fromEntries(formData);
  User.create({ email, password })
    .then(() => {
      console.log("The added data to DB : ", { email, password });
    })
    .catch((err) => console.log("following error occured: ", err));
}
export async function handleLogin(formData) {
  const { email, password } = Object.fromEntries(formData);
  let user = await User.find({ email, password });
  if (user) {
    return { status: "ok" };
  } else {
    console.log("user not found");
  }
}

export async function handlePost(formData) {
  console.log("controll reached");
  const { title, desc, img, slug } = Object.fromEntries(formData);

  await connectToDB();

  Post.create({ title, desc, userId: "65f0396431c4b0f762f9b71f", slug, img })
    .then((data) => {
      console.log("The added data to DB : ", data);
    })
    .catch((err) => console.log("following error occured: ", err));
}
export async function getPosts() {
  connectToDB();

  let posts = await Post.find();

  return posts;
}
