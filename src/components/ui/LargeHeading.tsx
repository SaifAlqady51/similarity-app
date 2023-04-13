import cn from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";


const largeHeadingVariants = cva(
    'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tight',
    {
        variants:{
            size:{
                default:'text-4xl md:text-5xl lg:text-6xl',
                lg:'text-5xl md:text-6xl lg:text-7xl',
                sm:'text-2xl md:text-3xl lg:text-4xl'
            }
        },
        defaultVariants:{
            size:'default'
        }
    }
)

interface LargeHeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof largeHeadingVariants>{}


const LargeHeading = forwardRef<HTMLHeadElement,LargeHeadingProps>(({
    className, size, children, ...props
    },ref) => {
    return <header ref={ref} {...props} className={cn(largeHeadingVariants({size,className}))}></header>
})

LargeHeading.displayName = 'LargeHeading'

export default LargeHeading