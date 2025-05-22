'use client';

import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Loader, X } from "lucide-react";
import { FC, MouseEvent, ReactNode, useCallback, useEffect } from "react";

interface ModalProps {
    icon?: string | ReactNode;
    title: string;
    description?: string;
    onCancel: () => void;
    onConfirm: () => void;
    cancelText?: string;
    confirmText?: string;
    className?: string;
    isOpen: boolean;
    loading?: boolean;
    loadingText?: string;
}


const Modal: FC<ModalProps> = ({
    icon,
    title,
    description,
    onCancel,
    onConfirm,
    cancelText = "Cancel",
    confirmText = "Confirm",
    className,
    isOpen,
    loading = false,
    loadingText = "Processing..."
}) => {
    const handleCancel = useCallback(() => {
        onCancel();
    }, [onCancel]);

    const handleConfirm = useCallback(() => {
        onConfirm();
    }, [onConfirm]);

    const handleBackdropClick = (e: MouseEvent) => {
        if (e.target === e.currentTarget) handleCancel();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleCancel();
        };

        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleCancel]);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black/65'
                    onClick={handleBackdropClick}
                >
                    {/* Modal Container */}
                    <div className="flex items-center justify-center min-h-screen px-4 text-center pointer-events-none">
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className={`relative inline-block w-full max-w-md p-6 text-left align-middle rounded-2xl shadow-xl pointer-events-auto ${className}`}
                            style={{
                                background: 'var(--gradient-brand-vertical)',
                                border: '2px solid var(--color-border-accent)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Leaves */}
                            <Leaf
                                className="absolute -top-6 -left-6 text-base-green-light/30"
                                size={64}
                                strokeWidth={0.5}
                            />
                            <Leaf
                                className="absolute -bottom-6 -right-6 text-base-green-light/30 transform rotate-180"
                                size={64}
                                strokeWidth={0.5}
                            />

                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-3">
                                    {icon ? (
                                        <div className="p-2 rounded-lg bg-bg-secondary/20">
                                            <span>{icon}</span>
                                        </div>
                                    ) : (
                                        <Leaf size={24} className="text-base-green-light" />
                                    )}
                                    <h3 className="text-2xl font-bold text-text-on-dark">
                                        {title}
                                    </h3>
                                </div>
                                <button
                                    onClick={onCancel}
                                    className="p-1 rounded-full cursor-pointer text-text-on-dark hover:bg-base-green-light transition-colors"
                                    disabled={loading}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="bg-bg-secondary/90 backdrop-blur-sm rounded-xl p-6 shadow-inner">
                                {description && (
                                    <p className="text-text-primary mb-6">
                                        {description}
                                    </p>
                                )}

                                {/* Action Buttons */}
                                <div className="flex gap-4 justify-end">
                                    <button
                                        onClick={onCancel}
                                        className="px-4 py-2 cursor-pointer rounded-lg bg-button-secondary-bg text-button-secondary-text hover:bg-base-green-light/20 transition-colors"
                                        disabled={loading}
                                    >
                                        {cancelText}
                                    </button>
                                    <button
                                        onClick={handleConfirm}
                                        className={`px-4 py-2 rounded-lg bg-button-danger text-button-primary-text transition-colors flex items-center gap-2 min-w-[120px] justify-center
                                            ${loading ? 'bg-button-danger/50 cursor-not-allowed' : 'cursor-pointer'}`}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <Loader className="animate-spin" size={18} />
                                                <span className="ml-2">{loadingText}</span>
                                            </>
                                        ) : (
                                            confirmText
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Animated Particles */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-base-green-light rounded-full"
                                        initial={{
                                            opacity: 0,
                                            scale: 0,
                                            x: Math.random() * 100 - 50 + '%',
                                            y: Math.random() * 100 - 50 + '%'
                                        }}
                                        animate={{
                                            opacity: [0, 0.4, 0],
                                            scale: [0, 1, 0],
                                            transition: {
                                                duration: 2 + Math.random() * 4,
                                                repeat: Infinity,
                                                delay: Math.random() * 2
                                            }
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal