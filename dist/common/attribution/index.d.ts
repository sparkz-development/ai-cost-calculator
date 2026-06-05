export interface AttributionParams {
    gclid?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    captured_at?: string;
    landing_page?: string;
}
/**
 * Captures attribution parameters (gclid, UTM) from URL and stores in localStorage.
 * Only captures if no existing attribution is stored (first-touch model).
 * Call this on app mount.
 */
export declare function captureAttributionParams(search: string): void;
/**
 * Retrieves stored attribution parameters.
 */
export declare function getAttributionParams(): AttributionParams | null;
interface GetAttributionOptions {
    omitUndefined?: boolean;
}
/**
 * Returns attribution params formatted for PostHog events/identify.
 * Uses $set_once prefix for first-touch attribution tracking.
 */
export declare function getAttributionForPostHog(options?: GetAttributionOptions): Record<string, string | undefined>;
/**
 * Clears stored attribution (useful for testing or reset scenarios).
 */
export declare function clearAttribution(): void;
export {};
