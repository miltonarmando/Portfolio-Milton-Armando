declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string
  readonly MODE: string
  readonly DEV: boolean
  readonly PROD: boolean
  // Add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}