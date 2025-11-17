import { greet, greetAdvanced, GreetingOptions } from './index';

describe('greet', () => {
  it('should return a greeting', () => {
    expect(greet('Test')).toBe('Hello, Test!');
  });

  it('should handle different names', () => {
    expect(greet('World')).toBe('Hello, World!');
    expect(greet('TypeScript')).toBe('Hello, TypeScript!');
  });
});

describe('greetAdvanced', () => {
  it('should work with default options', () => {
    expect(greetAdvanced('Test')).toBe('Hello, Test!');
  });

  it('should respect custom prefix', () => {
    expect(greetAdvanced('Test', { prefix: 'Hi' })).toBe('Hi, Test!');
  });

  it('should handle enthusiastic option', () => {
    expect(greetAdvanced('Test', { enthusiastic: false })).toBe('Hello, Test');
    expect(greetAdvanced('Test', { enthusiastic: true })).toBe('Hello, Test!');
  });

  it('should handle uppercase option', () => {
    expect(greetAdvanced('test', { uppercase: true })).toBe('Hello, TEST!');
    expect(greetAdvanced('test', { uppercase: false })).toBe('Hello, test!');
  });

  it('should combine multiple options', () => {
    const options: GreetingOptions = {
      prefix: 'Hey',
      enthusiastic: false,
      uppercase: true
    };
    expect(greetAdvanced('alice', options)).toBe('Hey, ALICE');
  });

  it('should handle partial options', () => {
    expect(greetAdvanced('Bob', { prefix: 'Welcome' })).toBe('Welcome, Bob!');
    expect(greetAdvanced('Charlie', { uppercase: true })).toBe('Hello, CHARLIE!');
  });
});
