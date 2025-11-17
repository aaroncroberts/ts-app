import Head from 'next/head'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import {
    Lightbulb,
    Code,
    Copy,
    Check,
    Star,
    Users,
    Globe,
    Zap
} from 'lucide-react'
import { useState } from 'react'

const examples = [
    {
        category: 'Basic Usage',
        icon: Code,
        color: 'from-blue-500 to-cyan-500',
        examples: [
            {
                title: 'Simple Greetings',
                description: 'Basic greeting functionality with different names',
                code: `import { greet } from '@aaron/ts-library'

// Basic greetings
console.log(greet('World'))     // "Hello, World!"
console.log(greet('Alice'))     // "Hello, Alice!"  
console.log(greet('Bob'))       // "Hello, Bob!"

// Works with any string
console.log(greet('Developer')) // "Hello, Developer!"`,
                output: `"Hello, World!"
"Hello, Alice!"
"Hello, Bob!"
"Hello, Developer!"`
            },
            {
                title: 'Type Safety Demo',
                description: 'Demonstrates TypeScript type checking and IntelliSense',
                code: `import { greet } from '@aaron/ts-library'

// ✅ Valid usage - string parameter
const message1 = greet('TypeScript')

// ❌ TypeScript error - number not allowed
// const message2 = greet(123)

// ✅ The return type is automatically inferred as string
const result: string = greet('Developer')
console.log(result.toUpperCase()) // "HELLO, DEVELOPER!"`,
                output: `"Hello, TypeScript!"
"HELLO, DEVELOPER!"`
            }
        ]
    },
    {
        category: 'Advanced Usage',
        icon: Star,
        color: 'from-purple-500 to-pink-500',
        examples: [
            {
                title: 'Custom Greetings',
                description: 'Using greetAdvanced with custom options',
                code: `import { greetAdvanced } from '@aaron/ts-library'

// Custom greeting text
const morning = greetAdvanced('Team', {
  greeting: 'Good morning',
  punctuation: '! ☀️'
})
console.log(morning)

// Formal greeting
const formal = greetAdvanced('Dr. Smith', {
  greeting: 'Greetings',
  punctuation: '.'
})
console.log(formal)

// Fun greeting
const fun = greetAdvanced('Friend', {
  greeting: 'Hey there',
  punctuation: '! 🎉'
})
console.log(fun)`,
                output: `"Good morning, Team! ☀️"
"Greetings, Dr. Smith."
"Hey there, Friend! 🎉"`
            },
            {
                title: 'Options Object Pattern',
                description: 'Using typed options for better maintainability',
                code: `import { greetAdvanced, GreetingOptions } from '@aaron/ts-library'

// Define reusable option sets
const formalOptions: GreetingOptions = {
  greeting: 'Good day',
  punctuation: '.'
}

const casualOptions: GreetingOptions = {
  greeting: 'Hey',
  punctuation: '! 😊'
}

// Use with different names
console.log(greetAdvanced('Alice', formalOptions))
console.log(greetAdvanced('Bob', casualOptions))
console.log(greetAdvanced('Charlie', formalOptions))`,
                output: `"Good day, Alice."
"Hey, Bob! 😊"
"Good day, Charlie."`
            }
        ]
    },
    {
        category: 'Real-world Scenarios',
        icon: Globe,
        color: 'from-green-500 to-emerald-500',
        examples: [
            {
                title: 'User Welcome System',
                description: 'Building a user onboarding greeting system',
                code: `import { greetAdvanced, GreetingOptions } from '@aaron/ts-library'

interface User {
  name: string
  isNewUser: boolean
  timeOfDay: 'morning' | 'afternoon' | 'evening'
}

function createWelcomeMessage(user: User): string {
  const options: GreetingOptions = {
    greeting: user.isNewUser 
      ? \`Welcome to our platform\`
      : \`Welcome back\`,
    punctuation: user.isNewUser ? '! 🎉' : '! 👋'
  }
  
  return greetAdvanced(user.name, options)
}

// Usage examples
const newUser: User = { 
  name: 'Alice', 
  isNewUser: true, 
  timeOfDay: 'morning' 
}

const returningUser: User = { 
  name: 'Bob', 
  isNewUser: false, 
  timeOfDay: 'afternoon' 
}

console.log(createWelcomeMessage(newUser))
console.log(createWelcomeMessage(returningUser))`,
                output: `"Welcome to our platform, Alice! 🎉"
"Welcome back, Bob! 👋"`
            },
            {
                title: 'Internationalized Greetings',
                description: 'Creating multi-language greeting system',
                code: `import { greetAdvanced, GreetingOptions } from '@aaron/ts-library'

type Language = 'en' | 'es' | 'fr' | 'de'

const greetings: Record<Language, string> = {
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour', 
  de: 'Guten Tag'
}

function greetInLanguage(name: string, language: Language): string {
  const options: GreetingOptions = {
    greeting: greetings[language],
    punctuation: '!'
  }
  
  return greetAdvanced(name, options)
}

// Multi-language greetings
console.log(greetInLanguage('Maria', 'es'))
console.log(greetInLanguage('Pierre', 'fr'))  
console.log(greetInLanguage('Hans', 'de'))
console.log(greetInLanguage('John', 'en'))`,
                output: `"Hola, Maria!"
"Bonjour, Pierre!"
"Guten Tag, Hans!"
"Hello, John!"`
            }
        ]
    },
    {
        category: 'Integration Patterns',
        icon: Zap,
        color: 'from-yellow-500 to-orange-500',
        examples: [
            {
                title: 'React Component Integration',
                description: 'Using the library in React components',
                code: `import React from 'react'
import { greet, greetAdvanced, GreetingOptions } from '@aaron/ts-library'

interface WelcomeProps {
  userName: string
  isVip?: boolean
}

const WelcomeComponent: React.FC<WelcomeProps> = ({ 
  userName, 
  isVip = false 
}) => {
  const getWelcomeMessage = (): string => {
    if (isVip) {
      const vipOptions: GreetingOptions = {
        greeting: 'Welcome, esteemed',
        punctuation: '! ⭐'
      }
      return greetAdvanced(userName, vipOptions)
    }
    
    return greet(userName)
  }

  return (
    <div className="welcome-banner">
      <h1>{getWelcomeMessage()}</h1>
    </div>
  )
}

// Usage
// <WelcomeComponent userName="Alice" />
// <WelcomeComponent userName="Bob" isVip={true} />`,
                output: `// Regular user: "Hello, Alice!"
// VIP user: "Welcome, esteemed Bob! ⭐"`
            },
            {
                title: 'Express.js API Integration',
                description: 'Using in Node.js/Express API endpoints',
                code: `import express from 'express'
import { greetAdvanced, GreetingOptions } from '@aaron/ts-library'

const app = express()
app.use(express.json())

// API endpoint for personalized greetings
app.post('/api/greet', (req, res) => {
  const { name, style = 'casual' } = req.body
  
  const styleOptions: Record<string, GreetingOptions> = {
    formal: { greeting: 'Good day', punctuation: '.' },
    casual: { greeting: 'Hey there', punctuation: '! 😊' },
    professional: { greeting: 'Greetings', punctuation: '.' }
  }
  
  const options = styleOptions[style] || styleOptions.casual
  const message = greetAdvanced(name, options)
  
  res.json({ 
    success: true, 
    message,
    timestamp: new Date().toISOString()
  })
})

// Example API responses:
// POST /api/greet { "name": "Alice", "style": "formal" }
// POST /api/greet { "name": "Bob", "style": "casual" }`,
                output: `// Response 1:
{
  "success": true,
  "message": "Good day, Alice.",
  "timestamp": "2023-11-16T10:30:00.000Z"
}

// Response 2:  
{
  "success": true,
  "message": "Hey there, Bob! 😊",
  "timestamp": "2023-11-16T10:31:00.000Z"
}`
            }
        ]
    }
]

export default function Examples() {
    const [copiedIndex, setCopiedIndex] = useState<string | null>(null)

    const copyCode = (code: string, id: string) => {
        navigator.clipboard.writeText(code)
        setCopiedIndex(id)
        setTimeout(() => setCopiedIndex(null), 2000)
    }

    return (
        <Layout>
            <Head>
                <title>Examples - @aaron/ts-library</title>
                <meta name="description" content="Real-world examples and usage patterns for @aaron/ts-library." />
            </Head>

            <div className="min-h-screen py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-6">
                            <Lightbulb className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                            Examples & Recipes
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Real-world examples, patterns, and integration guides for @aaron/ts-library.
                        </p>
                    </motion.div>

                    {/* Examples by Category */}
                    <div className="space-y-20">
                        {examples.map((category, categoryIndex) => (
                            <motion.section
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: categoryIndex * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-12">
                                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                                        <category.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">
                                        {category.category}
                                    </h2>
                                </div>

                                <div className="grid gap-8">
                                    {category.examples.map((example, exampleIndex) => (
                                        <motion.div
                                            key={example.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: exampleIndex * 0.1 }}
                                            viewport={{ once: true }}
                                            className="card"
                                        >
                                            <div className="mb-6">
                                                <h3 className="text-2xl font-bold text-white mb-3">
                                                    {example.title}
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {example.description}
                                                </p>
                                            </div>

                                            <div className="grid lg:grid-cols-2 gap-6">
                                                {/* Code */}
                                                <div>
                                                    <div className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden">
                                                        <div className="bg-dark-700 px-4 py-2 border-b border-dark-600 flex items-center justify-between">
                                                            <span className="text-sm text-gray-400 font-medium">example.ts</span>
                                                            <button
                                                                onClick={() => copyCode(example.code, `${categoryIndex}-${exampleIndex}-code`)}
                                                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-xs"
                                                            >
                                                                {copiedIndex === `${categoryIndex}-${exampleIndex}-code` ? (
                                                                    <>
                                                                        <Check className="w-3 h-3" />
                                                                        <span>Copied</span>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Copy className="w-3 h-3" />
                                                                        <span>Copy</span>
                                                                    </>
                                                                )}
                                                            </button>
                                                        </div>
                                                        <pre className="p-4 text-sm overflow-x-auto">
                                                            <code className="text-gray-300">{example.code}</code>
                                                        </pre>
                                                    </div>
                                                </div>

                                                {/* Output */}
                                                <div>
                                                    <div className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden h-full">
                                                        <div className="bg-dark-700 px-4 py-2 border-b border-dark-600 flex items-center justify-between">
                                                            <span className="text-sm text-gray-400 font-medium">Output</span>
                                                            <button
                                                                onClick={() => copyCode(example.output, `${categoryIndex}-${exampleIndex}-output`)}
                                                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-xs"
                                                            >
                                                                {copiedIndex === `${categoryIndex}-${exampleIndex}-output` ? (
                                                                    <>
                                                                        <Check className="w-3 h-3" />
                                                                        <span>Copied</span>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Copy className="w-3 h-3" />
                                                                        <span>Copy</span>
                                                                    </>
                                                                )}
                                                            </button>
                                                        </div>
                                                        <pre className="p-4 text-sm overflow-x-auto h-full">
                                                            <code className="text-green-400">{example.output}</code>
                                                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>
                        ))}
                    </div>

                    {/* Additional Resources */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Need More Help?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="card group hover:scale-105">
                                <Code className="w-8 h-8 text-primary-500 mb-4 mx-auto" />
                                <h3 className="text-lg font-bold text-white mb-3">API Reference</h3>
                                <p className="text-gray-300 mb-4 text-sm">
                                    Complete function signatures and type definitions
                                </p>
                                <button className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium">
                                    View Docs →
                                </button>
                            </div>

                            <div className="card group hover:scale-105">
                                <Users className="w-8 h-8 text-accent-500 mb-4 mx-auto" />
                                <h3 className="text-lg font-bold text-white mb-3">Community</h3>
                                <p className="text-gray-300 mb-4 text-sm">
                                    Join our community for support and discussions
                                </p>
                                <button className="text-accent-400 hover:text-accent-300 transition-colors text-sm font-medium">
                                    Get Help →
                                </button>
                            </div>

                            <div className="card group hover:scale-105">
                                <Globe className="w-8 h-8 text-green-500 mb-4 mx-auto" />
                                <h3 className="text-lg font-bold text-white mb-3">GitHub</h3>
                                <p className="text-gray-300 mb-4 text-sm">
                                    Source code, issues, and contributions welcome
                                </p>
                                <button className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium">
                                    View Source →
                                </button>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </Layout>
    )
}