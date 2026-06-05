/**
 * Google Service Account JWT Authentication for Cloudflare Workers
 * Based on: https://gist.github.com/markelliot/6627143be1fc8209c9662c504d0ff205
 */
import { CacheProvider } from "../../common/cache/provider";
/**
 * Get Google OAuth2 access token from service account
 * @param serviceAccountJson - The service account JSON as a string
 * @param orgId - Organization ID for cache isolation
 * @param scopes - Optional scopes, defaults to cloud-platform
 * @param cacheProvider - Required CacheProvider for distributed caching
 * @returns Access token string
 */
export declare function getGoogleAccessToken(serviceAccountJson: string, orgId?: string, scopes?: string[], cacheProvider?: CacheProvider): Promise<string>;
