/**
 * Type definitions for the model registry
 * Separated to avoid circular dependencies
 */
import type { ModelProviderName } from "./providers";
declare const allModels: {
    "glm-4.6": {
        name: string;
        author: "zai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Zai";
    };
    "glm-4.7": {
        name: string;
        author: "zai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Zai";
    };
    "ernie-4.5-21b-a3b-thinking": {
        name: string;
        author: "baidu";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Baidu";
    };
    "hermes-2-pro-llama-3-8b": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Tekken";
    };
    "llama-4-scout": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-4-maverick": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-guard-4": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-3.3-70b-versatile": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-3.3-70b-instruct": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-3.1-8b-instant": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-prompt-guard-2-86m": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-prompt-guard-2-22m": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-3.1-8b-instruct": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-3.1-8b-instruct-turbo": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "qwen3-32b": {
        name: string;
        author: "alibaba";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "qwen3-30b-a3b": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-coder": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "audio" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-next-80b-a3b-instruct": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-235b-a22b-thinking": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-vl-235b-a22b-instruct": {
        name: string;
        author: "alibaba";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-coder-30b-a3b-instruct": {
        name: string;
        author: "alibaba";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen2.5-coder-7b-fast": {
        name: string;
        author: "alibaba";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "deepseek-reasoner": {
        name: string;
        author: "deepseek";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "DeepSeek";
    };
    "deepseek-tng-r1t2-chimera": {
        name: string;
        author: "deepseek";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "DeepSeek";
    };
    "deepseek-v3": {
        name: string;
        author: "deepseek";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "DeepSeek";
    };
    "deepseek-v3.1-terminus": {
        name: string;
        author: "deepseek";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "DeepSeek";
    };
    "deepseek-v3.2": {
        name: string;
        author: "deepseek";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "DeepSeek";
    };
    "deepseek-r1-distill-llama-70b": {
        name: string;
        author: "deepseek";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "mistral-large-2411": {
        name: string;
        author: "mistral";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Mistral";
    };
    "mistral-small": {
        name: string;
        author: "mistral";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Mistral";
    };
    "mistral-nemo": {
        name: string;
        author: "mistral";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Mistral";
    };
    "grok-code-fast-1": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-4": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-4-fast-reasoning": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-4-fast-non-reasoning": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "audio" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-4-1-fast-non-reasoning": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "Grok";
    };
    "grok-4-1-fast-reasoning": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-3": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-3-mini": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "gemma-3-12b-it": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemma2-9b-it": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-3.1-flash-lite-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "audio" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-3-pro-image-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "Gemini";
    };
    "gemini-3-flash-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "audio" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-3.1-pro-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "audio" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-3-pro-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "audio" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-2.5-flash-lite": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-2.5-flash": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-2.5-pro": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-2.0-flash-exp": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "Gemini";
    };
    "gpt-image-1": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "GPT";
    };
    "gpt-image-1.5": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "GPT";
    };
    "gpt-oss-120b": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-oss-20b": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.4": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.4-2026-03-05": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-5.2": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.2-pro": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.2-chat-latest": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.1": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.1-codex": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.1-codex-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.1-chat-latest": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "codex-mini-latest": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.1-2025-11-13": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-5": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-nano": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-chat-latest": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-pro": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-codex": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-2025-08-07": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-5-mini-2025-08-07": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-5-nano-2025-08-07": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-5-pro-2025-10-01": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-4.1": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-4.1-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-4.1-nano": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "o4-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    o3: {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "o3-pro": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "o3-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    o1: {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "o1-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-4o": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-4o-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "chatgpt-4o-latest": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "claude-4.6-sonnet": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-4.6-opus": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-4.5-opus": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-opus-4-1-20250805": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-haiku-4-5-20251001": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-sonnet-4-5-20250929": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-4.5-haiku": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-4.5-sonnet": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-3-haiku-20240307": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-3.5-haiku": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-3.5-sonnet-v2": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-3.7-sonnet": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-sonnet-4": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-opus-4": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-opus-4-1": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
};
export type ModelName = keyof typeof allModels;
declare const modelProviderConfigs: {
    "glm-4.6:novita": {
        providerModelId: string;
        provider: "novita";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.6:canopywave": {
        providerModelId: string;
        provider: "canopywave";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.7:novita": {
        providerModelId: string;
        provider: "novita";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.7:canopywave": {
        providerModelId: string;
        provider: "canopywave";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.7:fireworks": {
        providerModelId: string;
        provider: "fireworks";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.6:baseten": {
        providerModelId: string;
        provider: "baseten";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.7:baseten": {
        providerModelId: string;
        provider: "baseten";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.7:cerebras": {
        providerModelId: string;
        provider: "cerebras";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "ernie-4.5-21b-a3b-thinking:novita": {
        provider: "novita";
        author: "baidu";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "hermes-2-pro-llama-3-8b:novita": {
        providerModelId: string;
        provider: "novita";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "functions" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-scout:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-maverick:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-maverick:novita": {
        providerModelId: string;
        provider: "novita";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-maverick:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-guard-4:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.3-70b-versatile:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instant:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-prompt-guard-2-86m:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-prompt-guard-2-22m:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-scout:openrouter": {
        provider: "openrouter";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-scout:novita": {
        provider: "novita";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-scout:deepinfra": {
        provider: "deepinfra";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-maverick:openrouter": {
        provider: "openrouter";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-guard-4:openrouter": {
        provider: "openrouter";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.3-70b-instruct:openrouter": {
        provider: "openrouter";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.3-70b-instruct:nebius": {
        provider: "nebius";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instant:openrouter": {
        provider: "openrouter";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instruct-turbo:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instruct-turbo:nebius": {
        providerModelId: string;
        provider: "nebius";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instruct:novita": {
        providerModelId: string;
        provider: "novita";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instruct:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.3-70b-instruct:novita": {
        providerModelId: string;
        provider: "novita";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-32b:groq": {
        providerModelId: string;
        provider: "groq";
        author: "alibaba";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty" | "reasoning" | "include_reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-32b:openrouter": {
        providerModelId: string;
        provider: "openrouter";
        author: "alibaba";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-30b-a3b:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp8";
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-coder:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp4";
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-coder:canopywave": {
        providerModelId: string;
        provider: "canopywave";
        author: "alibaba";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp8";
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-next-80b-a3b-instruct:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-235b-a22b-thinking:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-235b-a22b-thinking:novita": {
        providerModelId: string;
        provider: "novita";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "functions" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-vl-235b-a22b-instruct:novita": {
        providerModelId: string;
        provider: "novita";
        author: "alibaba";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-coder-30b-a3b-instruct:nebius": {
        providerModelId: string;
        provider: "nebius";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen2.5-coder-7b-fast:nebius": {
        providerModelId: string;
        provider: "nebius";
        author: "alibaba";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-reasoner:deepseek": {
        provider: "deepseek";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        quantization: "fp4";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stream" | "frequency_penalty" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-reasoner:openrouter": {
        provider: "openrouter";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stream" | "frequency_penalty" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-reasoner:deepinfra": {
        provider: "deepinfra";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-tng-r1t2-chimera:chutes": {
        provider: "chutes";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "frequency_penalty" | "functions" | "logit_bias" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3:deepseek": {
        provider: "deepseek";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "function_call" | "stream" | "frequency_penalty" | "functions" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3:deepinfra": {
        provider: "deepinfra";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp4";
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3:openrouter": {
        provider: "openrouter";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "function_call" | "stream" | "frequency_penalty" | "functions" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3.1-terminus:deepinfra": {
        provider: "deepinfra";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        quantization: "fp4";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3.1-terminus:novita": {
        provider: "novita";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3.2:novita": {
        provider: "novita";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3.2:baseten": {
        provider: "baseten";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "stop" | "top_k" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3.2:canopywave": {
        provider: "canopywave";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-r1-distill-llama-70b:groq": {
        providerModelId: string;
        provider: "groq";
        author: "deepseek";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty" | "reasoning" | "include_reasoning" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-r1-distill-llama-70b:openrouter": {
        provider: "openrouter";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-r1-distill-llama-70b:deepinfra": {
        provider: "deepinfra";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        quantization: "fp8";
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-r1-distill-llama-70b:chutes": {
        provider: "chutes";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "seed" | "stop" | "top_k" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "mistral-large-2411:mistral": {
        providerModelId: string;
        provider: "mistral";
        author: "mistral";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "mistral-small:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "mistral";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp8";
        endpointConfigs: {
            "*": {};
        };
    };
    "mistral-nemo:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "mistral";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-code-fast-1:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-fast-reasoning:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        providerModelIdAliases: string[];
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-fast-non-reasoning:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-1-fast-non-reasoning:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-1-fast-reasoning:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3-mini:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3-mini:openrouter": {
        provider: "openrouter";
        author: "xai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-fast-reasoning:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-fast-non-reasoning:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-1-fast-non-reasoning:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-1-fast-reasoning:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-code-fast-1:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3-mini:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3:openrouter": {
        provider: "openrouter";
        author: "xai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4:openrouter": {
        provider: "openrouter";
        author: "xai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-code-fast-1:openrouter": {
        provider: "openrouter";
        author: "xai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemma-3-12b-it:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemma2-9b-it:chutes": {
        providerModelId: string;
        provider: "chutes";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemma2-9b-it:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3.1-flash-lite-preview:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        ptbEnabled: true;
        responseFormat: "GOOGLE";
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3.1-flash-lite-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3.1-flash-lite-preview:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3.1-flash-lite-preview:helicone": {
        provider: "helicone";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-pro-image-preview:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            image: {
                input: number;
                output: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        ptbEnabled: true;
        responseFormat: "GOOGLE";
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-pro-image-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            image: {
                input: number;
                output: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3-pro-image-preview:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            image: {
                input: number;
                output: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-flash-preview:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        ptbEnabled: true;
        responseFormat: "GOOGLE";
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-flash-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3-flash-preview:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-flash-preview:helicone": {
        provider: "helicone";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3.1-pro-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3.1-pro-preview:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3.1-pro-preview:helicone": {
        provider: "helicone";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-pro-preview:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        ptbEnabled: true;
        responseFormat: "GOOGLE";
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-pro-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3-pro-preview:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-pro-preview:helicone": {
        provider: "helicone";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-flash-lite:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        ptbEnabled: true;
        responseFormat: "GOOGLE";
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-flash-lite:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-2.5-flash-lite:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-flash:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        ptbEnabled: true;
        responseFormat: "GOOGLE";
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-flash:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-2.5-flash:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-flash:helicone": {
        provider: "helicone";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-pro:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        ptbEnabled: true;
        responseFormat: "GOOGLE";
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-pro:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-2.5-pro:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.0-flash-exp:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            image: {
                input: number;
                output: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        ptbEnabled: false;
        responseFormat: "GOOGLE";
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.0-flash-exp:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            image: {
                input: number;
                output: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
        responseFormat: "GOOGLE";
        ptbEnabled: false;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-2.0-flash-exp:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            image: {
                input: number;
                output: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-image-1:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: "n"[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-image-1.5:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: "n"[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-120b:groq": {
        providerModelId: string;
        provider: "groq";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "max_completion_tokens" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty" | "reasoning" | "include_reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-20b:groq": {
        providerModelId: string;
        provider: "groq";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "max_completion_tokens" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty" | "reasoning" | "include_reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-20b:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-20b:novita": {
        provider: "novita";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        quantization: "bf16";
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-120b:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-120b:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp4";
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-120b:cerebras": {
        providerModelId: string;
        provider: "cerebras";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "stop" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-120b:baseten": {
        providerModelId: string;
        provider: "baseten";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "stop" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "logprobs" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "max_completion_tokens" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "verbosity")[];
        unsupportedParameters: never[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "logprobs" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4-2026-03-05:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "logprobs" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4-2026-03-05:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "max_completion_tokens" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "verbosity")[];
        unsupportedParameters: never[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4-2026-03-05:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "logprobs" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4-2026-03-05:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "logprobs" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "max_completion_tokens" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "verbosity")[];
        unsupportedParameters: never[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2-pro:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2-pro:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "max_completion_tokens" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "verbosity")[];
        unsupportedParameters: never[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2-chat-latest:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2-chat-latest:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "max_completion_tokens" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "verbosity")[];
        unsupportedParameters: never[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2-chat-latest:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2-pro:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "logprobs" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1-codex:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs" | "verbosity")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1-codex:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs" | "verbosity")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1-codex-mini:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs" | "verbosity")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1-codex-mini:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs" | "verbosity")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1-chat-latest:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1-chat-latest:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "codex-mini-latest:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs" | "verbosity")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1-2025-11-13:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1-2025-11-13:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1-2025-11-13:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1-2025-11-13:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.1-2025-11-13:novita": {
        provider: "novita";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini:azure": {
        providerModelId: string;
        provider: "azure";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "structured_outputs")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-chat-latest:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-chat-latest:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: "max_completion_tokens"[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-chat-latest:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-codex:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs" | "verbosity")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-codex:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs" | "verbosity")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-codex:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs" | "verbosity")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-2025-08-07:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-2025-08-07:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-2025-08-07:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-2025-08-07:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini-2025-08-07:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini-2025-08-07:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini-2025-08-07:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini-2025-08-07:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano-2025-08-07:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano-2025-08-07:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano-2025-08-07:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano-2025-08-07:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano-2025-08-07:novita": {
        provider: "novita";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini-2025-08-07:novita": {
        provider: "novita";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-2025-08-07:novita": {
        provider: "novita";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro-2025-10-01:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro-2025-10-01:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro-2025-10-01:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro-2025-10-01:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro-2025-10-01:novita": {
        provider: "novita";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-mini:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-nano:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1:azure": {
        providerModelId: string;
        provider: "azure";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-mini:azure": {
        providerModelId: string;
        provider: "azure";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-nano:azure": {
        providerModelId: string;
        provider: "azure";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-mini:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-nano:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-nano:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-mini:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o4-mini:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o4-mini:azure": {
        providerModelId: string;
        provider: "azure";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o4-mini:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o4-mini:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: "max_tokens"[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-pro:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-mini:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-mini:azure": {
        providerModelId: string;
        provider: "azure";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-mini:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-pro:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: "max_tokens"[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-mini:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: "max_tokens"[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-pro:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: "max_tokens"[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "n" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o1:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: "max_tokens"[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o1-mini:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: "max_tokens"[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o:azure": {
        providerModelId: string;
        provider: "azure";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o-mini:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o-mini:azure": {
        providerModelId: string;
        provider: "azure";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "chatgpt-4o-latest:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o-mini:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "chatgpt-4o-latest:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o-mini:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.6-sonnet:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.6-sonnet:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "anthropic";
        ptbEnabled: true;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-4.6-sonnet:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-4.6-sonnet:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.6-opus:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.6-opus:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "anthropic";
        version: string;
        ptbEnabled: true;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-4.6-opus:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-4.6-opus:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        providerModelIdAliases: string[];
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.6-opus:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.5-opus:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.5-opus:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "anthropic";
        version: string;
        ptbEnabled: true;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-4.5-opus:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-4.5-opus:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.5-opus:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4-1-20250805:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4-1-20250805:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "anthropic";
        version: string;
        ptbEnabled: true;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-opus-4-1-20250805:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-opus-4-1-20250805:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4-1-20250805:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-haiku-4-5-20251001:anthropic": {
        provider: "anthropic";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-haiku-4-5-20251001:vertex": {
        provider: "vertex";
        author: "anthropic";
        providerModelId: string;
        crossRegion: false;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "us-east5": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-haiku-4-5-20251001:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "us-east-1": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-haiku-4-5-20251001:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-haiku-4-5-20251001:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-sonnet-4-5-20250929:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        version: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-sonnet-4-5-20250929:vertex": {
        provider: "vertex";
        author: "anthropic";
        providerModelId: string;
        version: string;
        ptbEnabled: true;
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-sonnet-4-5-20250929:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-sonnet-4-5-20250929:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-sonnet-4-5-20250929:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        version: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.5-haiku:anthropic": {
        provider: "anthropic";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-4.5-haiku:vertex": {
        provider: "vertex";
        author: "anthropic";
        providerModelId: string;
        crossRegion: false;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "us-east5": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-4.5-haiku:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "us-east-1": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-4.5-haiku:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.5-haiku:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-4.5-sonnet:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        version: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.5-sonnet:vertex": {
        provider: "vertex";
        author: "anthropic";
        providerModelId: string;
        version: string;
        ptbEnabled: true;
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-4.5-sonnet:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-4.5-sonnet:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.5-sonnet:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        version: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-3-haiku-20240307:anthropic": {
        provider: "anthropic";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-3-haiku-20240307:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-3.5-haiku:anthropic": {
        provider: "anthropic";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-3.5-haiku:vertex": {
        provider: "vertex";
        author: "anthropic";
        providerModelId: string;
        crossRegion: false;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "us-east5": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-3.5-haiku:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "us-east-1": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-3.5-haiku:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-3.5-haiku:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-3.5-sonnet-v2:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-3.5-sonnet-v2:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "anthropic";
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-3.5-sonnet-v2:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-3.5-sonnet-v2:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-3.5-sonnet-v2:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-3.7-sonnet:anthropic": {
        provider: "anthropic";
        author: "anthropic";
        providerModelId: string;
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-3.7-sonnet:vertex": {
        provider: "vertex";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {};
        };
    };
    "claude-3.7-sonnet:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-3.7-sonnet:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-3.7-sonnet:deepinfra": {
        provider: "deepinfra";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-3.7-sonnet:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-sonnet-4:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        version: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-sonnet-4:vertex": {
        provider: "vertex";
        author: "anthropic";
        providerModelId: string;
        version: string;
        ptbEnabled: true;
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-sonnet-4:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-sonnet-4:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-sonnet-4:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        version: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "anthropic";
        version: string;
        ptbEnabled: true;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-opus-4:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-opus-4:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4-1:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4-1:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "anthropic";
        version: string;
        ptbEnabled: true;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-opus-4-1:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-opus-4-1:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4-1:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
};
export type ModelProviderConfigId = keyof typeof modelProviderConfigs;
export type DeploymentName = {
    [K in ModelProviderConfigId]: (typeof modelProviderConfigs)[K] extends {
        endpointConfigs: infer D;
    } ? D extends Record<string, any> ? keyof D & string : never : never;
}[ModelProviderConfigId];
export type EndpointId = `${ModelName}:${ModelProviderName}:${DeploymentName}`;
export {};
