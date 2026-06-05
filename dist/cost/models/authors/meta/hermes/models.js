"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
exports.models = {
    "hermes-2-pro-llama-3-8b": {
        name: "Hermes 2 Pro Llama 3 8B",
        author: "meta-llama",
        description: "Hermes 2 Pro is an upgraded, retrained version of Nous Hermes 2, consisting of an updated and cleaned version of the OpenHermes 2.5 Dataset, as well as a newly introduced Function Calling and JSON Mode dataset developed in-house.",
        contextLength: 131072,
        maxOutputTokens: 131072,
        created: "2024-05-27T00:00:00.000Z",
        modality: { inputs: ["text"], outputs: ["text"] },
        tokenizer: "Tekken",
    },
};
