/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_PROACTION: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
