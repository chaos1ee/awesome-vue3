declare module 'global' {
  interface ImportMetaEnv {
    VITE_DOCUMENT_TITLE: string
    VITE_PORT: number
    VITE_REQUEST_PREFIX: string
  }
}
