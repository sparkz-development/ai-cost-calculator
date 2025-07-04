"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.costs = void 0;
exports.costs = [
    {
        model: {
            operator: "equals",
            value: "gpt-4-turbo-preview",
        },
        cost: {
            prompt_token: 0.00001,
            completion_token: 0.00003,
        },
    },
    {
        model: {
            operator: "equals",
            value: "gpt-45-turbo",
        },
        cost: {
            prompt_token: 0.00001,
            completion_token: 0.00003,
        },
    },
    {
        model: {
            operator: "equals",
            value: "gpt4-turbo-preview",
        },
        cost: {
            prompt_token: 0.00001,
            completion_token: 0.00003,
        },
    },
    {
        model: {
            operator: "equals",
            value: "gpt-4-preview-1106",
        },
        cost: {
            prompt_token: 0.00001,
            completion_token: 0.00003,
        },
    },
    {
        model: {
            operator: "equals",
            value: "gpt-35-turbo-1106",
        },
        cost: {
            prompt_token: 0.0000015,
            completion_token: 0.000002,
        },
    },
    {
        model: {
            operator: "equals",
            value: "gpt35",
        },
        cost: {
            prompt_token: 0.0000015,
            completion_token: 0.000002,
        },
    },
    {
        model: {
            operator: "equals",
            value: "gpt-35-turbo-0613",
        },
        cost: {
            prompt_token: 0.0000015,
            completion_token: 0.000002,
        },
    },
    {
        model: {
            operator: "equals",
            value: "gpt-35-16k",
        },
        cost: {
            prompt_token: 0.000003,
            completion_token: 0.000004,
        },
    },
    {
        model: {
            operator: "equals",
            value: "gpt-4-vision",
        },
        cost: {
            prompt_token: 0.00001,
            completion_token: 0.00003,
        },
    },
    {
        model: {
            operator: "includes",
            value: "gpt-4o-realtime",
        },
        cost: {
            prompt_token: 0.000005,
            completion_token: 0.00002,
            prompt_audio_token: 0.00004,
            completion_audio_token: 0.00008,
            prompt_cache_read_token: 0.0000025,
        },
    },
    {
        model: {
            operator: "includes",
            value: "gpt-4o-mini-realtime",
        },
        cost: {
            prompt_token: 0.00000015,
            completion_token: 0.0000006,
            prompt_audio_token: 0.00001,
            completion_audio_token: 0.00002,
        },
    },
];
