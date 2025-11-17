# @aaron/ts-library

A TypeScript utility library providing greeting functionality with advanced
customization options.

## Installation

```bash
npm install @aaron/ts-library --registry=https://npm.pkg.github.com
```

> **Note**: This package is published to GitHub Package Registry.  
> See the [main repository README](../../README.md#📦-publishing) for setup.

## Quick Start

```typescript
import { greet, greetAdvanced, GreetingOptions } from '@aaron/ts-library';

// Simple greeting
const message = greet('World');
console.log(message); // "Hello, World!"

// Advanced greeting with options
const customGreeting = greetAdvanced('Alice', {
  prefix: 'Hi',
  enthusiastic: false,
  uppercase: true
});
console.log(customGreeting); // "Hi, ALICE"
```

## API Reference

### `greet(name: string): string`

Generates a personalized greeting message.

**Parameters:**

- `name` - The name of the person to greet

**Returns:**

- A formatted greeting message

**Example:**

```typescript
const greeting = greet('Developer');
// Returns: "Hello, Developer!"
```

### `greetAdvanced(name: string, options?: GreetingOptions): string`

Advanced greeting function with customizable options.

**Parameters:**

- `name` - The name of the person to greet
- `options` - Configuration options (optional)

**Returns:**

- A formatted greeting message based on options

**Example:**

```typescript
const greeting = greetAdvanced('team', {
  prefix: 'Welcome',
  enthusiastic: true,
  uppercase: false
});
// Returns: "Welcome, team!"
```

### `GreetingOptions`

Configuration interface for advanced greeting functionality.

**Properties:**

- `prefix?: string` - The greeting prefix (default: "Hello")
- `enthusiastic?: boolean` - Whether to add exclamation mark (default: true)
- `uppercase?: boolean` - Convert name to uppercase (default: false)

## Examples

### Basic Usage

```typescript
import { greet } from '@aaron/ts-library';

const names = ['Alice', 'Bob', 'Charlie'];
const greetings = names.map(name => greet(name));

console.log(greetings);
// ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]
```

### Advanced Customization

```typescript
import { greetAdvanced, GreetingOptions } from '@aaron/ts-library';

const options: GreetingOptions = {
  prefix: 'Good morning',
  enthusiastic: false,
  uppercase: true
};

const professionalGreeting = greetAdvanced('Dr. Smith', options);
console.log(professionalGreeting); // "Good morning, DR. SMITH"
```

### Error Handling

```typescript
import { greet } from '@aaron/ts-library';

function safeGreet(name: unknown): string {
  if (typeof name !== 'string') {
    throw new Error('Name must be a string');
  }
  
  if (name.trim().length === 0) {
    throw new Error('Name cannot be empty');
  }
  
  return greet(name.trim());
}

try {
  const greeting = safeGreet('  World  ');
  console.log(greeting); // "Hello, World!"
} catch (error) {
  console.error('Greeting failed:', error.message);
}
```

## TypeScript Support

This library is written in TypeScript and provides full type definitions  
out of the box. No additional `@types/*` packages are needed.

```typescript
import type { GreetingOptions } from '@aaron/ts-library';

// TypeScript will provide full IntelliSense and type checking
const config: GreetingOptions = {
  prefix: 'Hey',        // ✅ Valid
  enthusiastic: true,   // ✅ Valid
  uppercase: false,     // ✅ Valid
  // invalid: 'test'    // ❌ TypeScript error
};
```

## Browser Support

This library supports both ES modules and CommonJS:

- **ES Modules**: Use with modern bundlers (Webpack, Vite, etc.)
- **CommonJS**: Use with Node.js applications

The library is built for environments supporting ES2015+.

## Contributing

See the [main repository](../../README.md) for contribution guidelines.

## License

ISC License - see [LICENSE](../../LICENSE) file.
