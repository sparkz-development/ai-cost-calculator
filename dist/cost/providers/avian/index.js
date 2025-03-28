"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.costs = void 0;
exports.costs = [
    {
        model: {
            operator: "equals",
            value: "Meta-Llama-3.1-405B-Instruct",
        },
        cost: {
            prompt_token: 0.0000015,
            completion_token: 0.0000015,
        },
    },
    {
        model: {
            operator: "equals",
            value: "Meta-Llama-3.3-70B-Instruct",
        },
        cost: {
            prompt_token: 0.00000045,
            completion_token: 0.00000045,
        },
    },
    {
        model: {
            operator: "equals",
            value: "Meta-Llama-3.1-70B-Instruct",
        },
        cost: {
            prompt_token: 0.00000045,
            completion_token: 0.00000045,
        },
    },
    {
        model: {
            operator: "equals",
            value: "Meta-Llama-3.1-8B-Instruct",
        },
        cost: {
            prompt_token: 0.0000001,
            completion_token: 0.0000001,
        },
    },
];
