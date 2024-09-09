import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const cname_list = [
  'cname-vc.9420.ltd',
  'cname-vc.cmds.run',
  '127.0.0.1:3000'
];

export {
  cname_list
};