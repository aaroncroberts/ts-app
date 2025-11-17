import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Menu,
    X,
    Book,
    Code,
    Sparkles,
    Github,
    ExternalLink,
    ChevronRight
} from 'lucide-react'

interface NavItem {
    name: string
    href: string
    icon?: React.ComponentType<{ className?: string }>
    external?: boolean
}const navigation: NavItem[] = [
    { name: 'Getting Started', href: '/getting-started', icon: Sparkles },
    { name: 'API Reference', href: '/api', icon: Code },
    { name: 'Examples', href: '/examples', icon: Book },
    { name: 'GitHub', href: 'https://github.com/your-username/ts-app', icon: Github, external: true },
]

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-dark-900 relative">
            {/* Floating background shapes */}
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            {/* Navigation */}
            <nav className="relative z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-3"
                        >
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                                <Code className="w-5 h-5 text-white" />
                            </div>
                            <Link href="/" className="text-xl font-bold gradient-text">
                                @aaron/ts-library
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navigation.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {item.external ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                                        >
                                            {item.icon && <item.icon className="w-4 h-4" />}
                                            <span>{item.name}</span>
                                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            {item.icon && <item.icon className="w-4 h-4" />}
                                            <span>{item.name}</span>
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-400 hover:text-white p-2"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-dark-800/95 backdrop-blur-lg border-t border-dark-700"
                        >
                            <div className="px-4 py-4 space-y-4">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        {item.external ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between text-gray-300 hover:text-white transition-colors duration-200 py-2"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    {item.icon && <item.icon className="w-5 h-5" />}
                                                    <span>{item.name}</span>
                                                </div>
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="flex items-center justify-between text-gray-300 hover:text-white transition-colors duration-200 py-2"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    {item.icon && <item.icon className="w-5 h-5" />}
                                                    <span>{item.name}</span>
                                                </div>
                                                <ChevronRight className="w-4 h-4" />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Main Content */}
            <main className="relative z-10">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative z-10 bg-dark-800/50 backdrop-blur-sm border-t border-dark-700 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-3 mb-4 md:mb-0">
                            <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-md flex items-center justify-center">
                                <Code className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-400">@aaron/ts-library</span>
                        </div>
                        <div className="text-sm text-gray-500">
                            Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}