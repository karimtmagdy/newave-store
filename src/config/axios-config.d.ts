import { AxiosInstance, AxiosRequestConfig } from "axios";

// Type definitions for the axios-config module

// Main axios instance with custom configuration
declare const api: AxiosInstance;

// Request cancellation helper
interface CancelToken {
  signal: AbortSignal;
  cancel: () => void;
}

declare function createCancelToken(): CancelToken;

// Cached GET request helper
declare function cachedGet<T = any>(
  url: string,
  config?: AxiosRequestConfig,
  ttl?: number,
): Promise<T>;

// File upload helper with progress tracking
declare function uploadFile(
  url: string,
  file: File,
  onProgress?: (percentage: number) => void,
): Promise<any>;

export { api as default, createCancelToken, cachedGet, uploadFile };
