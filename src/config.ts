/**
 * Application configuration
 *
 * The BASE_URL is determined at build time from the VITE_BASE_URL environment variable.
 * If not set, it defaults to the current origin + base path.
 *
 * To change the deployment URL:
 * 1. Set VITE_BASE_URL in your .env file or CI/CD environment
 * 2. Example: VITE_BASE_URL=https://reasonlint.com
 */

// Get the base URL from environment variable, or construct from current location
export const BASE_URL = import.meta.env.VITE_BASE_URL ||
    (typeof window !== 'undefined'
        ? `${window.location.origin}${import.meta.env.BASE_URL}`.replace(/\/$/, '')
        : '');

// Helper to construct full URLs
export const getFullUrl = (path: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${BASE_URL}${cleanPath}`;
};

// Install script URLs
export const INSTALL_URLS = {
    sh: `${BASE_URL}/install.sh`,
    ps1: `${BASE_URL}/install.ps1`,
};

// Install commands for each platform
export const getInstallCommands = () => ({
    macOS: {
        label: 'macOS',
        command: `curl -fsSL ${INSTALL_URLS.sh} | bash`,
    },
    linux: {
        label: 'Linux',
        command: `curl -fsSL ${INSTALL_URLS.sh} | bash`,
    },
    windows: {
        label: 'Windows',
        command: `irm ${INSTALL_URLS.ps1} | iex`,
    },
});
