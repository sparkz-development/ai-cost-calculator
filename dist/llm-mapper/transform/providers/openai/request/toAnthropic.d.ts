import { AnthropicRequestBody } from "../../../types/anthropic";
import { HeliconeChatCreateParams } from "../../../../../prompts/types";
import { Plugin } from "../../../../../cost/models/types";
export declare function toAnthropic(openAIBody: HeliconeChatCreateParams, providerModelId?: string, plugins?: Plugin[], options?: {
    includeCacheBreakpoints?: boolean;
}): AnthropicRequestBody;
