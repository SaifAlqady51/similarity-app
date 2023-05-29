import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@/lib/utils";

// cva is a library that helps with adding variants to components without getting missy with tailwind
// taking away all the worries about of class naming
// https://cva.style/docs

const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

// creating ParagraphProps interface even for the paragraphVariants you can add prperites or not 

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}


// forwareRef is used to pass ref from wherever the component   
// https://legacy.reactjs.org/docs/forwarding-refs.html 

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <div>
        <p
          ref={ref}
          {...props}
          className={cn(paragraphVariants({ size, className }))}
        >
          {children}
        </p>
      </div>
    );
  }
);

//we use this displayName as the name will be removed in the dead-code elemination on production builds

Paragraph.displayName = "Paragraph";

export default Paragraph;
