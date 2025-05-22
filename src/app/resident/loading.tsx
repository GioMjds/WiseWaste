'use client'

import { motion } from 'framer-motion'

export default function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <motion.div
                className="w-16 h-16 border-t-4 border-blue-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    )
}