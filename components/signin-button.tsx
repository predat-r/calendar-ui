"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";


const SigninButton = () => {
  return <Button onClick={() => signIn("google")}>Sign in</Button>;
};

export default SigninButton;
