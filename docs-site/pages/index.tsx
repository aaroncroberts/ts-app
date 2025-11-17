import Head from 'next/head'
import { motion } from 'framer-motion'
import {
    Code,
    Zap,
    Shield,
    Package,
    ArrowRight,
    Copy,
    Check,
    Download,
    Star,
    GitBranch
} from 'lucide-react'
import Layout from '@/components/Layout'
import { useState } from 'react'

const features = [
    {
        icon: Code,
        title: 'TypeScript First',
        description: 'Built with TypeScript for excellent developer experience with full type safety and IntelliSense support.',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Optimized for performance with minimal bundle size and tree-shaking support for modern applications.',
        color: 'from-yellow-500 to-orange-500'
    },
    {
        icon: Shield,
        title: 'Fully Tested',
        description: 'Comprehensive test coverage with Jest ensuring reliability and stability in production environments.',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: Package,
        title: 'Dual Builds',
        description: 'Supports both ESM and CommonJS modules for maximum compatibility across different environments.',
        color: 'from-purple-500 to-pink-500'
    }
]

const stats = [
    { label: 'Bundle Size', value: '< 5KB', icon: Package },
    { label: 'Coverage', value: '100%', icon: Shield },
    { label: 'Dependencies', value: '0', icon: GitBranch },
    { label: 'Rating', value: '5/5', icon: Star },
]

export default function Home() {
    const [copied, setCopied] = useState(false)

    const installCommand = 'npm install @aaron/ts-library'

    const copyToClipboard = () => {
        navigator.clipboard.writeText(installCommand)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Layout>
            <Head>
                <title>@aaron/ts-library - Professional TypeScript Library</title>
                <meta name="description" content="A modern, type-safe TypeScript library with comprehensive documentation and examples." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                                <span className="block gradient-text">Modern TypeScript</span>
                                <span className="block text-white">Library</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                A professional, type-safe library built with modern best practices.
                                Comprehensive documentation, 100% test coverage, and developer-first design.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                        >
                            <button className="btn-primary group">
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="btn-secondary">
                                View Examples
                            </button>
                        </motion.div>

                        {/* Installation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="max-w-2xl mx-auto"
                        >
                            <p className="text-gray-400 mb-4">Quick Installation</p>
                            <div className="relative">
                                <div className="code-block font-mono text-left flex items-center justify-between">
                                    <span className="text-green-400">$</span>
                                    <span className="flex-1 ml-2">{installCommand}</span>
                                    <button
                                        onClick={copyToClipboard}
                                        className="p-2 hover:bg-dark-700 rounded transition-colors"
                                    >
                                        {copied ? (
                                            <Check className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-gray-400" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-dark-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl mb-4">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Why Choose <span className="gradient-text">@aaron/ts-library</span>?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Built with modern development practices and designed for developer happiness.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card group hover:scale-105"
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Code Example Section */}
            <section className="py-20 bg-dark-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Simple & <span className="gradient-text">Powerful</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Clean APIs with full TypeScript support and comprehensive documentation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden">
                            <div className="bg-dark-700 px-6 py-3 border-b border-dark-600">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="ml-4 text-gray-400 text-sm font-mono">example.ts</span>
                                </div>
                            </div>
                            <div className="p-6 font-mono text-sm">
                                <pre className="text-gray-300">
                                    {`import { greet, greetAdvanced } from '@aaron/ts-library'

// Simple usage with full type safety
const message = greet('World')
console.log(message) // "Hello, World!"

// Advanced usage with options
const customMessage = greetAdvanced('Developer', {
  greeting: 'Welcome',
  punctuation: '! 🎉'
})
console.log(customMessage) // "Welcome, Developer! 🎉"`}
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to <span className="gradient-text">Get Started</span>?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                            Join developers who trust @aaron/ts-library for their TypeScript projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn-primary group">
                                <Download className="mr-2 w-5 h-5" />
                                Install Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="btn-secondary">
                                Read Documentation
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    )
}