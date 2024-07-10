import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetters(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function parseSearch(query: string) {
  return capitalizeFirstLetters(query.replace(/-|dub|sub|uncensored|censored|full|half|special|edition/g, match => match === '-' ? ' ' : '').trim());
}