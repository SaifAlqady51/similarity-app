"use client";

import { FC, HTMLAttributes, useState } from "react";
import { Button } from "./ui/Button";
import { signIn } from "next-auth/react";
import { toast } from "./ui/Toast";

interface SignInButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button
    className="p-5"
      onClick={signInWithGoogle}
      isLoading={isLoading}
    >
      Sign in with google
    </Button>
  );
};

export default SignInButton;
