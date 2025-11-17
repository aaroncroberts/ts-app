/**
 * Generates a personalized greeting message.
 * 
 * @param name - The name of the person to greet
 * @returns A formatted greeting message
 * 
 * @example
 * ```typescript
 * import { greet } from '@aaron/ts-library';
 * 
 * const message = greet('World');
 * console.log(message); // "Hello, World!"
 * ```
 * 
 * @example
 * ```typescript
 * // Multiple greetings
 * const names = ['Alice', 'Bob', 'Charlie'];
 * const greetings = names.map(name => greet(name));
 * ```
 * 
 * @public
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Configuration options for advanced greeting functionality.
 * 
 * @public
 */
export interface GreetingOptions {
  /** The greeting prefix (default: "Hello") */
  prefix?: string;
  /** Whether to add exclamation mark (default: true) */
  enthusiastic?: boolean;
  /** Convert name to uppercase (default: false) */
  uppercase?: boolean;
}

/**
 * Advanced greeting function with customizable options.
 * 
 * @param name - The name of the person to greet
 * @param options - Configuration options for the greeting
 * @returns A formatted greeting message based on options
 * 
 * @example
 * Basic usage:
 * ```typescript
 * const greeting = greetAdvanced('Alice');
 * console.log(greeting); // "Hello, Alice!"
 * ```
 * 
 * @example
 * Custom options:
 * ```typescript
 * const greeting = greetAdvanced('bob', {
 *   prefix: 'Hi',
 *   enthusiastic: false,
 *   uppercase: true
 * });
 * console.log(greeting); // "Hi, BOB"
 * ```
 * 
 * @public
 */
export function greetAdvanced(name: string, options: GreetingOptions = {}): string {
  const {
    prefix = 'Hello',
    enthusiastic = true,
    uppercase = false
  } = options;

  const processedName = uppercase ? name.toUpperCase() : name;
  const punctuation = enthusiastic ? '!' : '';

  return `${prefix}, ${processedName}${punctuation}`;
}
