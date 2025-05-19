"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { sendRegisterOtp } from "@/services/Auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface RegisterForm {
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterPage = () => {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterForm>({
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
        onError: (error) => {
            console.error(`Error registering: ${error}`);
        }
    });

    const onSubmit: SubmitHandler<RegisterForm> = (data) => {
        mutate(data);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-primary">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bg-white/90 shadow-xl rounded-2xl p-8 w-full max-w-md border border-border-primary"
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                    className="flex justify-center mb-6"
                >
                    <Image src="/logo.png" alt="Nature" width={64} height={64} />
                </motion.div>
                <h1 className="text-3xl font-bold text-base-green-dark mb-2 text-center">
                    Create Account
                </h1>
                <p className="text-text-secondary text-center mb-6">
                    Join WiseWaste and help make the world greener!
                </p>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
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
                            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-base-sage-light text-base-green-dark"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="space-y-1">
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
                                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-base-sage-light text-base-green-dark pr-10"
                            />
                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-base-green-dark hover:text-base-green-dark focus:outline-none"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                <FontAwesomeIcon
                                    icon={passwordVisible ? faEyeSlash : faEye}
                                    size="lg"
                                />
                            </motion.button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>
                    <div className="space-y-1">
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Confirm Password"
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: (value) =>
                                        value === password || "Passwords do not match",
                                })}
                                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-base-sage-light text-base-green-dark pr-10"
                            />
                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-base-green-dark)] hover:text-[var(--color-base-green-dark)] focus:outline-none"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                <FontAwesomeIcon
                                    icon={passwordVisible ? faEyeSlash : faEye}
                                    size="lg"
                                />
                            </motion.button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isPending}
                        className={`w-full py-2 rounded-lg bg-button-primary-bg text-button-primary-text font-semibold hover:bg-bg-button-hover transition-colors duration-200 shadow-md ${isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                        {isPending ? "Creating account..." : "Register"}
                    </button>
                </form>
                <div className="text-center mt-4">
                    <span className="text-text-secondary">
                        Already have an account?{" "}
                    </span>
                    <Link
                        href="/login"
                        className="text-base-green-dark font-medium hover:underline"
                    >
                        Login
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterPage;
