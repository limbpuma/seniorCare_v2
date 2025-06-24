/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference path="./types/window.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_EMAIL_API_URL: string;
  readonly PUBLIC_EMAIL_API_URL_REPLICA: string;
  readonly PUBLIC_EMAIL_API_URL_DEPLOY: string;
  readonly PUBLIC_BACKEND_URL: string;
  readonly PUBLIC_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
