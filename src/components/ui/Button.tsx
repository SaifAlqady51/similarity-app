import cn from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import {HTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";


// cva is a library that helps with adding variants to components without getting missy with tailwind
// taking away all the worries about of class naming
// https://cva.style/docs

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disable:opacity-50 dark:focus:ring-slate-400 disables:pointer-events-none dark:focus:ring-offset-900",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100",
        outline:
          "bg-slate-900 text-white hover:bg-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 hover:bg-slate-100 dark:border-slate-700",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-tranparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// creating ButtonProps interface even for the headingVariants you can add prperites or not 

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  disabled?: boolean;
}

// forwareRef is used to pass ref from wherever the component   
// https://legacy.reactjs.org/docs/forwarding-refs.html 

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);

//we use this displayName as the name will be removed in the dead-code elemination on production builds

Button.displayName = "Button";

export { Button, buttonVariants };
