/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly API_KEY: string;
    readonly API_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}