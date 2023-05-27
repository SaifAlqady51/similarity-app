import Icons from "@/components/Icons";
import { buttonVariants } from "@/components/ui/Button";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import UserAuthForm from "@/components/ui/UserAuthForm";
import Link from "next/link";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <div className="absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center gap-6 max-w-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link
            href="/"
            className={buttonVariants({
              variant: "ghost",
              className: "w-fit",
            })}
          >
            <Icons.ChevronLeft className="mr-2 h-2 w-4" />
            Back to home
          </Link>
          <LargeHeading>Welcome back!</LargeHeading>
          <Paragraph>Please sign in with your google account.</Paragraph>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
};

export default page;
