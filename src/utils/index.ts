import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to resolve asset paths with base URL
export function getAssetUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Get base URL from vite config or default to '/'
  const base = import.meta.env.BASE_URL || '/'
  
  // Ensure base ends with slash
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  
  // Combine base URL with asset path, avoiding double slashes
  return `${normalizedBase}${cleanPath}`
}
