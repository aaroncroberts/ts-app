import Head from 'next/head'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import {
    Rocket,
    Download,
    Code,
    Zap,
    Copy,
    Check,
    ArrowRight,
    Package,
    Terminal
} from 'lucide-react'
import { useState } from 'react'

const steps = [
    {
        icon: Download,
        title: 'Install the Package',
        description: 'Add @aaron/ts-library to your project using your preferred package manager.',
        commands: [
            { manager: 'npm', command: 'npm install @aaron/ts-library' },
            { manager: 'yarn', command: 'yarn add @aaron/ts-library' },
            { manager: 'pnpm', command: 'pnpm add @aaron/ts-library' },
        ]
    },
    {
        icon: Code,
        title: 'Import Functions',
        description: 'Import the functions you need with full TypeScript support.',
        code: `import { greet, greetAdvanced } from '@aaron/ts-library'`
    },
    {
        icon: Zap,
        title: 'Start Using',
        description: 'Call the functions in your code with complete type safety.',
        code: `const message = greet('World')
console.log(message) // "Hello, World!"`
    }
]

const examples = [
    {
        title: 'Basic Usage',
        description: 'Simple greeting with default options',
        code: `import { greet } from '@aaron/ts-library'

const message = greet('World')
console.log(message) // "Hello, World!"

const userMessage = greet('Alice')  
console.log(userMessage) // "Hello, Alice!"`
    },
    {
        title: 'Advanced Usage',
        description: 'Customized greetings with options',
        code: `import { greetAdvanced } from '@aaron/ts-library'

// Custom greeting
const morning = greetAdvanced('Team', {
  greeting: 'Good morning',
  punctuation: '! ☀️'
})
console.log(morning) // "Good morning, Team! ☀️"

// Formal greeting
const formal = greetAdvanced('Dr. Smith', {
  greeting: 'Greetings',
  punctuation: '.'
})
console.log(formal) // "Greetings, Dr. Smith."`
    },
    {
        title: 'TypeScript Integration',
        description: 'Full type safety and IntelliSense support',
        code: `import { greetAdvanced, GreetingOptions } from '@aaron/ts-library'

// Type-safe options object
const options: GreetingOptions = {
  greeting: 'Welcome',
  punctuation: '! 🎉'
}

const welcomeMessage = greetAdvanced('Developer', options)
console.log(welcomeMessage) // "Welcome, Developer! 🎉"`
    }
]

export default function GettingStarted() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
    const [selectedManager, setSelectedManager] = useState('npm')

    const copyCode = (code: string, index: number) => {
        navigator.clipboard.writeText(code)
        setCopiedIndex(index)
        setTimeout(() => setCopiedIndex(null), 2000)
    }

    return (
        <Layout>
            <Head>
                <title>Getting Started - @aaron/ts-library</title>
                <meta name="description" content="Learn how to install and use @aaron/ts-library in your TypeScript projects." />
            </Head>

            <div className="min-h-screen py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-6">
                            <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                            Getting Started
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Get up and running with @aaron/ts-library in just a few minutes.
                        </p>
                    </motion.div>

                    {/* Installation Steps */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Quick Setup
                        </h2>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col lg:flex-row items-start gap-8"
                                >
                                    <div className="flex items-center space-x-4 lg:min-w-0 lg:flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                                            <step.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="hidden lg:block w-px h-20 bg-gradient-to-b from-primary-500/50 to-transparent"></div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            {index + 1}. {step.title}
                                        </h3>
                                        <p className="text-gray-300 mb-6">
                                            {step.description}
                                        </p>

                                        {step.commands && (
                                            <div className="space-y-4">
                                                <div className="flex space-x-2 border-b border-dark-700">
                                                    {step.commands.map((cmd) => (
                                                        <button
                                                            key={cmd.manager}
                                                            onClick={() => setSelectedManager(cmd.manager)}
                                                            className={`px-4 py-2 text-sm font-medium transition-colors ${selectedManager === cmd.manager
                                                                    ? 'text-primary-400 border-b-2 border-primary-400'
                                                                    : 'text-gray-400 hover:text-gray-300'
                                                                }`}
                                                        >
                                                            {cmd.manager}
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="relative">
                                                    <div className="code-block flex items-center justify-between">
                                                        <div className="flex items-center flex-1">
                                                            <Terminal className="w-4 h-4 text-green-400 mr-2" />
                                                            <code className="text-gray-300">
                                                                {step.commands.find(cmd => cmd.manager === selectedManager)?.command}
                                                            </code>
                                                        </div>
                                                        <button
                                                            onClick={() => copyCode(
                                                                step.commands.find(cmd => cmd.manager === selectedManager)?.command || '',
                                                                index
                                                            )}
                                                            className="p-2 hover:bg-dark-700 rounded transition-colors"
                                                        >
                                                            {copiedIndex === index ? (
                                                                <Check className="w-4 h-4 text-green-500" />
                                                            ) : (
                                                                <Copy className="w-4 h-4 text-gray-400" />
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {step.code && (
                                            <div className="relative">
                                                <div className="code-block">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-xs text-gray-500 font-medium">TypeScript</span>
                                                        <button
                                                            onClick={() => copyCode(step.code || '', index + 10)}
                                                            className="p-1 hover:bg-dark-700 rounded transition-colors"
                                                        >
                                                            {copiedIndex === index + 10 ? (
                                                                <Check className="w-3 h-3 text-green-500" />
                                                            ) : (
                                                                <Copy className="w-3 h-3 text-gray-400" />
                                                            )}
                                                        </button>
                                                    </div>
                                                    <pre className="text-sm overflow-x-auto">
                                                        <code className="text-gray-300">{step.code}</code>
                                                    </pre>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Examples Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Usage Examples
                        </h2>

                        <div className="space-y-8">
                            {examples.map((example, index) => (
                                <motion.div
                                    key={example.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="card"
                                >
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {example.title}
                                        </h3>
                                        <p className="text-gray-300">
                                            {example.description}
                                        </p>
                                    </div>

                                    <div className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden">
                                        <div className="bg-dark-700 px-4 py-2 border-b border-dark-600 flex items-center justify-between">
                                            <span className="text-sm text-gray-400 font-medium">example.ts</span>
                                            <button
                                                onClick={() => copyCode(example.code, index + 20)}
                                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-xs"
                                            >
                                                {copiedIndex === index + 20 ? (
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
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Next Steps */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">
                            What&apos;s Next?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="card group hover:scale-105">
                                <Package className="w-8 h-8 text-primary-500 mb-4 mx-auto" />
                                <h3 className="text-lg font-bold text-white mb-3">
                                    Explore the API
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Dive deep into all available functions and interfaces.
                                </p>
                                <button className="btn-primary text-sm">
                                    View API Reference
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>

                            <div className="card group hover:scale-105">
                                <Code className="w-8 h-8 text-accent-500 mb-4 mx-auto" />
                                <h3 className="text-lg font-bold text-white mb-3">
                                    See More Examples
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Check out real-world usage patterns and recipes.
                                </p>
                                <button className="btn-secondary text-sm">
                                    Browse Examples
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </Layout>
    )
}