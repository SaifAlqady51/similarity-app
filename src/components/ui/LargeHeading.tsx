import { FC } from "react";

import cn from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

// cva is a library that helps with adding variants to components without getting missy with tailwind
// taking away all the worries about of class naming
// https://cva.style/docs

const headingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

// creating LargeHeadingProps interface even for the headingVariants you can add prperites or not 

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

// forwareRef is used to pass ref from wherever the component   
// https://legacy.reactjs.org/docs/forwarding-refs.html 

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <div>
      <h1
        {...props}
        className={cn(headingVariants({ size, className }))}
      >
        {children}
      </h1>
    </div>
  );
};

export default LargeHeading;
