import { GoogleUsageMetadata } from "../../../types/google";
import { ModelUsage } from "../../../../../cost/usage/types";
/**
 * Converts GoogleUsageMetadata to normalized ModelUsage.
 *
 * The calculation is straightforward per modality:
 * - Input = promptTokensDetails[modality] - cacheTokensDetails[modality]
 * - Cached Input = cacheTokensDetails[modality]
 * - Output = candidatesTokensDetails[modality]
 * - Thinking = thoughtsTokenCount
 *
 * Falls back to top-level counts if no modality details are available.
 */
export declare function mapGoogleUsageToModelUsage(usage: GoogleUsageMetadata): ModelUsage;
