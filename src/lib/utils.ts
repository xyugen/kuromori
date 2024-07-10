import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function parseSearch(query: string) {
  return query.replace(/-|dub/g, match => match === '-' ? ' ' : '').trim();
}