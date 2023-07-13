import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export const signInUser = async (email, password) => {
  try {
    const ressignIn = signInWithEmailAndPassword(auth, email, password);
    //   console.log(signIn);
    //   console.log(signIn);
    toast.promise(ressignIn, {
      pending: "please wait! login in..",
      // success: "you're Logged in",
      // error: "error..",
    });
    const signIn = await ressignIn;
    console.log(signIn);
    if (signIn.user?.uid) {
      toast.success("you're logged in");
      console.log(signIn.user?.uid);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const createNewUser = async ({ email, password }) => {
  //   const { email, password } = rest;

  const PromNewUser = createUserWithEmailAndPassword(auth, email, password);

  toast.promise(PromNewUser, {
    pending: "please wait..",
    success: "Welcome to Chat App",
    error: "Please! Try again!",
  });

  const newUser = await PromNewUser;

  if (newUser.user?.uid) {
    toast.success("hello check");
  }
};
