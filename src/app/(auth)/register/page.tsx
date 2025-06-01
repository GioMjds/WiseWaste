/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { sendRegisterOtp } from "@/services/Auth";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface RegisterForm {
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterPage = () => {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors }, watch, setError } = useForm<RegisterForm>({
        mode: "onBlur",
    });
    const password = watch("password");

    const { mutate, isPending } = useMutation({
        mutationFn: async (data: RegisterForm) => {
            return await sendRegisterOtp(data.email, data.password, data.confirmPassword);
        },
        onSuccess: (response) => {
            if (response && response.email) {
                router.push(`/verify-otp?email=${encodeURIComponent(response.email)}`);
            }
        },
        onError: (error: any) => {
            console.error(`Error registering: ${error}`);
            const errData = error.response?.data;
            const errorMessage = errData?.error;
            const statusCode = error.response?.status;

            if (statusCode === 400) {
                setError("email", {
                    message: errorMessage,
                    type: "400"
                });
                return;
            }

            if (errData && errorMessage) {
                if (errorMessage.toLowerCase().includes("user already exists")) {
                    setError("email", {
                        message: errorMessage,
                        type: "400"
                    });
                } else if (errorMessage.toLowerCase().includes("passwords do not match")) {
                    setError("confirmPassword", {
                        message: errorMessage,
                        type: "400"
                    });
                }
            } else {
                setError("root.serverError", {
                    message: errorMessage,
                    type: "500"
                });
            }
        }
    });

    const onSubmit: SubmitHandler<RegisterForm> = (data) => mutate(data);

    return (
        <div className="min-h-screen flex overflow-hidden bg-base-sage-light">
            {/* Left Side - Branding with Curved Design */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-1/2 relative overflow-hidden"
            >
                {/* Curved Background */}
                <div className="absolute inset-0 bg-gradient-to-bl from-base-green-dark via-base-green-medium to-base-green-light">
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M100,0 Q70,50 100,100 L0,100 L0,0 Z"
                            fill="rgba(225, 238, 188, 0.1)"
                        />
                        <path
                            d="M100,20 Q60,60 100,100 L0,100 L0,20 Z"
                            fill="rgba(255, 255, 255, 0.05)"
                        />
                    </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-12 text-center">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                        className="mb-8"
                    >
                        <div className="bg-white/20 backdrop-blur-md rounded-full p-6 mb-6 inline-block">
                            <Image src="/logo.png" alt="WiseWaste Logo" width={80} height={80} />
                        </div>
                        <h2 className="text-5xl font-bold text-white mb-4">
                            WiseWaste
                        </h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-xl text-white/90 leading-relaxed max-w-md"
                        >
                            &ldquo;Begin your journey towards sustainable living.
                            Every small action creates a ripple of positive change.&rdquo;
                        </motion.p>
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, -5, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-16 left-16 bg-white/10 backdrop-blur-sm rounded-full p-4"
                    >
                        <div className="w-8 h-8 bg-base-sage-light rounded-full"></div>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            x: [0, -10, 0]
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5
                        }}
                        className="absolute bottom-28 right-20 bg-white/10 backdrop-blur-sm rounded-full p-3"
                    >
                        <div className="w-6 h-6 bg-base-green-light rounded-full"></div>
                    </motion.div>

                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                        className="absolute top-2/3 right-12 bg-white/5 backdrop-blur-sm rounded-full p-2"
                    >
                        <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Right Side - Register Form */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-1/2 flex items-center justify-center p-8 relative z-10"
            >
                <div className="w-full max-w-md">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-white/20"
                    >
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-center mb-8"
                        >
                            <h1 className="text-3xl font-bold text-base-green-dark mb-2">
                                Create Account
                            </h1>
                            <p className="text-text-secondary">
                                Join the green revolution today
                            </p>
                        </motion.div>

                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <input
                                    type="email"
                                    placeholder="Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    className="w-full px-6 py-4 rounded-2xl border-2 border-transparent bg-base-sage-light/50 focus:outline-none focus:border-base-green-medium focus:bg-white transition-all duration-300 text-base-green-dark placeholder-text-secondary"
                                />
                                {errors.email && (
                                    <motion.span
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-sm mt-2 block"
                                    >
                                        {errors.email.message}
                                    </motion.span>
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                className="relative"
                            >
                                <div className="relative">
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        placeholder="Password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters",
                                            },
                                        })}
                                        className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-transparent bg-base-sage-light/50 focus:outline-none focus:border-base-green-medium focus:bg-white transition-all duration-300 text-base-green-dark placeholder-text-secondary"
                                    />
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-base-green-dark hover:text-base-green-medium transition-colors focus:outline-none"
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                    >
                                        <FontAwesomeIcon
                                            icon={passwordVisible ? faEye : faEyeSlash}
                                            size="xl"
                                        />
                                    </motion.button>
                                </div>
                                {errors.password && (
                                    <motion.span
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-sm mt-2 block"
                                    >
                                        {errors.password.message}
                                    </motion.span>
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="relative"
                            >
                                <div className="relative">
                                    <input
                                        type={confirmPasswordVisible ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        {...register("confirmPassword", {
                                            required: "Please confirm your password",
                                            validate: (value) =>
                                                value === password || "Passwords do not match",
                                        })}
                                        className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-transparent bg-base-sage-light/50 focus:outline-none focus:border-base-green-medium focus:bg-white transition-all duration-300 text-base-green-dark placeholder-text-secondary"
                                    />
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-base-green-dark hover:text-base-green-medium transition-colors focus:outline-none"
                                        onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                                    >
                                        <FontAwesomeIcon
                                            icon={confirmPasswordVisible ? faEye : faEyeSlash}
                                            size="xl"
                                        />
                                    </motion.button>
                                </div>
                                {errors.confirmPassword && (
                                    <motion.span
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 text-sm mt-2 block"
                                    >
                                        {errors.confirmPassword.message}
                                    </motion.span>
                                )}
                            </motion.div>

                            <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(50, 142, 110, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                disabled={isPending}
                                className={`w-full py-4 rounded-2xl bg-gradient-to-r from-base-green-medium to-base-green-light text-white font-semibold shadow-lg transition-all duration-300 
                                    ${isPending ? "opacity-50 cursor-not-allowed"
                                        : "cursor-pointer hover:shadow-xl"}`}
                            >
                                {isPending ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Creating account...
                                    </div>
                                ) : (
                                    "Register"
                                )}
                            </motion.button>

                            {/* Google Register button */}
                            <motion.button
                                type='button'
                                onClick={() => signIn('google')}
                                className="w-full py-4 cursor-pointer rounded-2xl bg-white/10 backdrop-blur-md text-base-green-dark font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(50, 142, 110, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FontAwesomeIcon icon={faGoogle} />
                                Sign up with Google
                            </motion.button>
                        </form>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.0, duration: 0.5 }}
                            className="text-center mt-8"
                        >
                            <span className="text-text-secondary">
                                Already have an account?{" "}
                            </span>
                            <Link
                                href="/login"
                                className="text-base-green-dark font-semibold hover:text-base-green-medium transition-colors hover:underline"
                            >
                                Login
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterPage;
