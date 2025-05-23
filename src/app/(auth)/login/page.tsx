/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { login } from "@/services/Auth";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginForm {
    email: string;
    password: string;
}

const LoginPage = () => {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginForm>({
        mode: "onBlur",
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (data: LoginForm) => {
            return await login(data.email, data.password);
        },
        onSuccess: (response) => {
            if (response?.user) {
                if (response.user.role === "admin") router.push("/admin");
                else router.push("/resident");
            }
        },
        onError: (error: any) => {
            console.error(`Login failed: ${error}`);
            const errData = error.response?.data;
            const statusCode = error.response?.status;

            if (statusCode === 403) {
                setError("email", {
                    message: errData.error,
                    type: "403"
                });
                return;
            }

            if (errData && errData.error) {
                const message = errData.error;
                if (message.toLowerCase().includes("user does not exist")) {
                    setError("email", { message: message, type: "404" });
                } else if (message.toLowerCase().includes('password')) {
                    setError("password", { message: message, type: "401" });
                } else {
                    setError("root.serverError", { message: message, type: "500" });
                }
            }
        }
    });

    const onSubmit: SubmitHandler<LoginForm> = (data) => mutate(data);

    return (
        <div className="min-h-screen flex overflow-hidden bg-base-sage-light">
            {/* Left Side - Login Form */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
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
                                Welcome Back
                            </h1>
                            <p className="text-text-secondary">
                                Continue your eco-friendly journey
                            </p>
                        </motion.div>

                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                                        }
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
                                                message: "Password must be at least 6 characters long",
                                            }
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

                            <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
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
                                        Logging in...
                                    </div>
                                ) : (
                                    "Login"
                                )}
                            </motion.button>
                        </form>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                            className="text-center mt-8"
                        >
                            <span className="text-text-secondary">
                                New to WiseWaste?{" "}
                            </span>
                            <Link
                                href="/register"
                                className="text-base-green-dark font-semibold hover:text-base-green-medium transition-colors hover:underline"
                            >
                                Create Account
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Right Side - Branding with Curved Design */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-1/2 relative overflow-hidden"
            >
                {/* Curved Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-base-green-dark via-base-green-medium to-base-green-light">
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0 Q30,50 0,100 L100,100 L100,0 Z"
                            fill="rgba(225, 238, 188, 0.1)"
                        />
                        <path
                            d="M0,20 Q40,60 0,100 L100,100 L100,20 Z"
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
                            <Image src="/logo.png" alt="WiseWaste Logo" width={110} height={110} />
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
                            &ldquo;Smart waste management for a sustainable tomorrow.
                            Join thousands making a difference, one decision at a time.&rdquo;
                        </motion.p>
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-20 right-20 bg-white/10 backdrop-blur-sm rounded-full p-4"
                    >
                        <div className="w-8 h-8 bg-base-sage-light rounded-full"></div>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            x: [0, 10, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute bottom-32 left-16 bg-white/10 backdrop-blur-sm rounded-full p-3"
                    >
                        <div className="w-6 h-6 bg-base-green-light rounded-full"></div>
                    </motion.div>

                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="absolute top-1/3 left-8 bg-white/5 backdrop-blur-sm rounded-full p-2"
                    >
                        <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
