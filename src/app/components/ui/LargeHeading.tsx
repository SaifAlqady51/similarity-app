import cn from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";


const LargeHeadingVariants = cva(
    'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
    {
        variants:{
            size:{
                default:'text-base sm:text-lg',
                sm:'text-sm sm:text-base'
            }
        },
        defaultVariants:{
            size:'default'
        }
    }
)

interface LargeHeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof LargeHeadingVariants>{}


const LargeHeading = forwardRef<HTMLHeadElement,LargeHeadingProps>(({
    className, size, children, ...props
    },ref) => {
    return <header ref={ref} {...props} className={cn(LargeHeadingVariants({size,className}))}></header>
})

LargeHeading.displayName = 'LargeHeading'

export default LargeHeading