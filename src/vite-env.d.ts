/// <reference types="vite/client" />

interface ImportMetaEnv {
    /**
     * Base URL for the deployed site.
     * Used for generating install script URLs and other absolute URLs.
     * Examples:
     *   - https://reasonlint.com
     */
    readonly VITE_BASE_URL?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
