import { greet, greetAdvanced, GreetingOptions } from '@aaron/ts-library';

// Basic greeting
const message = greet('World from Monorepo');
console.log(message);

// Advanced greeting examples
const customOptions: GreetingOptions = {
    prefix: 'Welcome',
    enthusiastic: true,
    uppercase: false
};

const welcomeMessage = greetAdvanced('TypeScript Developer', customOptions);
console.log(welcomeMessage);

// Professional greeting
const professionalGreeting = greetAdvanced('Dr. Smith', {
    prefix: 'Good morning',
    enthusiastic: false,
    uppercase: true
});
console.log(professionalGreeting);
