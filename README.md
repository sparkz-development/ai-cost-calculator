# @sparkz-community/ai-cost-calculator

A comprehensive library for calculating costs across various AI providers and models.

## Installation

```bash
# Using npm
npm install @sparkz-community/ai-cost-calculator
```

```bash
# Using yarn
yarn add @sparkz-community/ai-cost-calculator
```

```bash
# Using pnpm
pnpm add @sparkz-community/ai-cost-calculator
```

## Usage

### Basic Cost Calculation

```typescript
import { costOf, costOfPrompt } from '@sparkz-community/ai-cost-calculator';

// Get the cost object for a specific model
const cost = costOf({ 
  model: 'gpt-4', 
  provider: 'OPENAI' 
});

// Calculate the cost of a specific prompt
const totalCost = costOfPrompt({
  provider: 'OPENAI',
  model: 'gpt-4',
  promptTokens: 500,
  promptCacheWriteTokens: 0,
  promptCacheReadTokens: 0,
  completionTokens: 200
});

console.log(`Cost for this request: $${totalCost.toFixed(6)}`);
```

### Using LLM Mappers

```typescript
import { mapOpenAIRequestV2 } from '@sparkz-community/ai-cost-calculator';

const mappedRequest = mapOpenAIRequestV2({
  request: openAIRequestObject,
  response: openAIResponseObject,
  model: 'gpt-4'
});
```

## How to add new cost data

1. Add new cost data to the `cost/providers/` directory. If provider folder exists, add to its index.ts. If not, create a new folder with the provider name and an index.ts and export a cost object

   Example:

   File name: `cost/providers/anthropic/index.ts`

   ```typescript
   export const costs: ModelRow[] = [
     {
       model: {
         operator: "equals",
         value: "claude-instant-1",
       },
       cost: {
         prompt_token: 0.00000163,
         completion_token: 0.0000551,
       },
     },
   ];
   ```

   We can match in 3 ways:

   - `equals`: The model name must be exactly the same as the value
   - `startsWith`: The model name must start with the value
   - `includes`: The model name must include the value

   Use what is most appropriate for the model

   cost object is the cost per token for prompt and completion

2. Import the new cost data into `cost/providers/mappings.ts` and add it to the `providers` array

   Example:

   File name: `cost/providers/mappings.ts`

   ```typescript
   import { costs as anthropicCosts } from "./anthropic";

   // 1. Add the pattern for the API so it is a valid gateway.
   const anthropicPattern = /^https:\/\/api\.anthropic\.com/;

   // 2. Add Anthropic pattern, provider tag, and costs array from the generated list
   export const providers: {
     pattern: RegExp;
     provider: string;
     costs?: ModelRow[];
   }[] = [
     // ...
     {
       pattern: anthropicPattern,
       provider: "ANTHROPIC",
       costs: anthropicCosts,
     },
     // ...
   ];
   ```

3. Run `npm test -- -u` to update the snapshot tests
4. Run `npm run build` to compile the changes

## Features

- Calculate costs for various AI providers (OpenAI, Anthropic, Google, etc.)
- Support for different cost models (prompt tokens, completion tokens, etc.)
- LLM request and response mapping utilities
- TypeScript support with full type definitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
