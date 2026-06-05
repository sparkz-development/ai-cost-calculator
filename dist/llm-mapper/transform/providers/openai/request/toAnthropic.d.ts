import { AnthropicRequestBody } from "../../../types/anthropic";
import { HeliconeChatCreateParams } from "@helicone-package/prompts/types";
import { Plugin } from "@helicone-package/cost/models/types";
export declare function toAnthropic(openAIBody: HeliconeChatCreateParams, providerModelId?: string, plugins?: Plugin[], options?: {
    includeCacheBreakpoints?: boolean;
}): AnthropicRequestBody;
