/**
 * Stripe fee calculation utilities
 * Based on Stripe's standard processing fees: 3% + $0.30 per transaction
 */
/** Stripe percentage fee rate (3%) */
export declare const STRIPE_PERCENT_FEE_RATE = 0.03;
/** Stripe fixed fee per transaction in cents ($0.30) */
export declare const STRIPE_FIXED_FEE_CENTS = 30;
/**
 * Calculate Stripe processing fees for a given amount
 * @param amountCents - The amount in cents
 * @param transactionCount - Number of transactions (default: 1)
 * @returns Total fees in cents
 */
export declare function calculateStripeFee(amountCents: number, transactionCount?: number): number;
/**
 * Calculate Stripe fees in reverse
 * Given a gross amount (what was charged), calculate what the fees were
 * Formula: fee = (gross - fixed) * rate / (1 + rate) + fixed
 * This ensures: gross - fee = net, and fee = net * rate + fixed
 * @param amountCents - The gross amount in cents (what was charged)
 * @param transactionCount - Number of transactions (default: 1)
 * @returns Total fees in cents
 */
export declare function reverseCalculateStripeFee(amountCents: number, transactionCount?: number): number;
/**
 * Calculate net amount after removing Stripe fees
 * This is the actual amount received after Stripe takes their cut
 * @param grossAmountCents - The total amount charged in cents
 * @param transactionCount - Number of transactions
 * @returns Net amount in cents after fees
 */
export declare function calculateNetAmount(grossAmountCents: number, transactionCount: number): number;
/**
 * Calculate gross amount needed to achieve a desired net amount
 * This is useful for determining how much to charge to receive a specific amount
 * @param netAmountCents - The desired net amount in cents
 * @param transactionCount - Number of transactions
 * @returns Gross amount in cents that needs to be charged
 */
export declare function calculateGrossFromNet(netAmountCents: number, transactionCount: number): number;
/**
 * Calculate the average fee per transaction for a given total amount
 * @param totalAmountCents - The total amount in cents
 * @param transactionCount - Number of transactions
 * @returns Average fee per transaction in cents
 */
export declare function calculateAverageFeePerTransaction(totalAmountCents: number, transactionCount: number): number;
/**
 * Format cents to dollars string
 * @param cents - Amount in cents
 * @param includeSymbol - Whether to include $ symbol
 * @returns Formatted dollar string
 */
export declare function formatCentsAsDollars(cents: number, includeSymbol?: boolean): string;
/**
 * Convert dollars to cents
 * @param dollars - Amount in dollars
 * @returns Amount in cents
 */
export declare function dollarsToCents(dollars: number): number;
