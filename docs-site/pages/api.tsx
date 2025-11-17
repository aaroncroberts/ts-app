import Head from 'next/head'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import { Code, Book, Zap, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const apiMethods = [
    {
        name: 'greet',
        signature: 'greet(name: string): string',
        description: 'Creates a simple greeting message for the given name.',
        example: `import { greet } from '@aaron/ts-library'

const message = greet('World')
console.log(message) // "Hello, World!"`,
        parameters: [
            {
                name: 'name',
                type: 'string',
                description: 'The name to include in the greeting'
            }
        ],
        returns: {
            type: 'string',
            description: 'A formatted greeting message'
        }
    },
    {
        name: 'greetAdvanced',
        signature: 'greetAdvanced(name: string, options?: GreetingOptions): string',
        description: 'Creates an advanced greeting message with customizable options.',
        example: `import { greetAdvanced } from '@aaron/ts-library'

// Basic usage
const simple = greetAdvanced('Alice')
console.log(simple) // "Hello, Alice!"

// With custom options  
const custom = greetAdvanced('Dr. Smith', {
  greeting: 'Good morning',
  punctuation: '.'
})
console.log(custom) // "Good morning, Dr. Smith."`,
        parameters: [
            {
                name: 'name',
                type: 'string',
                description: 'The name to include in the greeting'
            },
            {
                name: 'options',
                type: 'GreetingOptions',
                description: 'Optional configuration object',
                optional: true
            }
        ],
        returns: {
            type: 'string',
            description: 'A formatted greeting message with custom options applied'
        }
    }
]

const interfaces = [
    {
        name: 'GreetingOptions',
        description: 'Configuration options for customizing greeting messages.',
        properties: [
            {
                name: 'greeting',
                type: 'string',
                description: 'Custom greeting text (default: "Hello")',
                optional: true
            },
            {
                name: 'punctuation',
                type: 'string',
                description: 'Punctuation to append (default: "!")',
                optional: true
            }
        ]
    }
]

export default function ApiReference() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

    const copyExample = (example: string, index: number) => {
        navigator.clipboard.writeText(example)
        setCopiedIndex(index)
        setTimeout(() => setCopiedIndex(null), 2000)
    }

    return (
        <Layout>
            <Head>
                <title>API Reference - @aaron/ts-library</title>
                <meta name="description" content="Complete API reference for @aaron/ts-library with examples and type definitions." />
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
                            <Code className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                            API Reference
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Complete reference guide for all functions, interfaces, and types in @aaron/ts-library.
                        </p>
                    </motion.div>

                    {/* Functions Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <Zap className="w-8 h-8 text-primary-500 mr-3" />
                            Functions
                        </h2>

                        <div className="space-y-12">
                            {apiMethods.map((method, index) => (
                                <motion.div
                                    key={method.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="card"
                                >
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{method.name}</h3>
                                        <div className="code-block">
                                            <code className="text-accent-400 font-mono">{method.signature}</code>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {method.description}
                                    </p>

                                    {/* Parameters */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-white mb-4">Parameters</h4>
                                        <div className="space-y-3">
                                            {method.parameters.map((param, paramIndex) => (
                                                <div key={paramIndex} className="flex items-start space-x-4">
                                                    <div className="bg-dark-700 rounded px-3 py-1 text-sm font-mono text-accent-400 min-w-fit">
                                                        {param.name}{param.optional ? '?' : ''}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-primary-400 font-mono text-sm mb-1">
                                                            {param.type}
                                                        </div>
                                                        <div className="text-gray-300 text-sm">
                                                            {param.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Returns */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-white mb-4">Returns</h4>
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-dark-700 rounded px-3 py-1 text-sm font-mono text-primary-400">
                                                {method.returns.type}
                                            </div>
                                            <div className="text-gray-300 text-sm">
                                                {method.returns.description}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Example */}
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="text-lg font-semibold text-white">Example</h4>
                                            <button
                                                onClick={() => copyExample(method.example, index)}
                                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                                            >
                                                {copiedIndex === index ? (
                                                    <>
                                                        <Check className="w-4 h-4" />
                                                        <span>Copied!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-4 h-4" />
                                                        <span>Copy</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                        <div className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden">
                                            <pre className="p-4 text-sm overflow-x-auto">
                                                <code className="text-gray-300">{method.example}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Interfaces Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                            <Book className="w-8 h-8 text-accent-500 mr-3" />
                            Interfaces
                        </h2>

                        <div className="space-y-8">
                            {interfaces.map((iface, index) => (
                                <motion.div
                                    key={iface.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="card"
                                >
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{iface.name}</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {iface.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">Properties</h4>
                                        <div className="space-y-4">
                                            {iface.properties.map((prop, propIndex) => (
                                                <div key={propIndex} className="flex items-start space-x-4 p-4 bg-dark-800/50 rounded-lg">
                                                    <div className="bg-dark-700 rounded px-3 py-1 text-sm font-mono text-accent-400 min-w-fit">
                                                        {prop.name}{prop.optional ? '?' : ''}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-primary-400 font-mono text-sm mb-1">
                                                            {prop.type}
                                                        </div>
                                                        <div className="text-gray-300 text-sm">
                                                            {prop.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>
        </Layout>
    )
}