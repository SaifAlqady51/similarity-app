import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


// this function will dynamically name the the className of the components we will use

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
