import { ClassValue,clsx } from "clsx";
import { NEXT_CLIENT_SSR_ENTRY_SUFFIX } from "next/dist/shared/lib/constants";
import {twMerge} from "tailwind-merge"

export default function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}