/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { resendRegisterOtp, verifyRegisterOtp } from "@/services/Auth";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const VerifyOtpPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [resendLoading, setResendLoading] = useState(false);
    const [resendMessage, setResendMessage] = useState<string | null>(null);

    const [cooldownTime, setCooldownTime] = useState(0);
    const [isCooldown, setIsCooldown] = useState(false);

    const { mutate, isPending } = useMutation({
        mutationFn: async () => {
            const otpNumber = otp.join("");
            return await verifyRegisterOtp(email, otpNumber);
        },
        onSuccess: (response) => {
            if (response && response.user) {
                setSuccess("OTP verified! Redirecting...");
                if (response.user.role === 'admin') router.push("/admin");
                else router.push("/");
            }
        },
        onError: (err: any) => {
            setError(err?.response?.data?.error || "Invalid OTP or server error.");
            setOtp(new Array(6).fill(""));
            inputRefs.current[0]?.focus();
        }
    });

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (isCooldown) {
            timer = setInterval(() => {
                setCooldownTime((prevTime) => {
                    if (prevTime <= 1) {
                        setIsCooldown(false);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isCooldown]);

    const formatCooldownTime = () => {
        const minutes = Math.floor(cooldownTime / 60);
        const seconds = cooldownTime % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const handleChange = (index: number, value: string) => {
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < 5) inputRefs.current[index + 1]?.focus();
        } else if (value === "") {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text/plain").slice(0, 6);
        const newOtp = [...otp];

        pasteData.split("").forEach((char, i) => {
            if (i < 6 && /^[0-9]$/.test(char)) {
                newOtp[i] = char;
            }
        });

        setOtp(newOtp);
        const lastFilledIndex = pasteData.split("").findIndex(c => !c) - 1;
        inputRefs.current[Math.min(5, lastFilledIndex)]?.focus();
    };

    const handleResendOtp = async () => {
        setResendLoading(true);
        setResendMessage(null);
        setError(null);

        try {
            const response = await resendRegisterOtp(email);
            if (response && response.message) {
                setResendMessage("OTP resent successfully!");
                setCooldownTime(120);
                setIsCooldown(true);
            }
        } catch (error) {
            console.error(`Error resending OTP: ${error}`);
            setError("Failed to resend OTP. Please try again.");
        } finally {
            setResendLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-primary relative overflow-hidden">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
                className="absolute w-[200%] h-[200%] bg-gradient-to-r from-base-green-light/20 to-base-green-dark/20 -rotate-45"
            />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-md border-2 border-border-primary relative z-10"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex justify-center mb-6"
                >
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-6xl text-base-green-dark/80"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-base-green-dark mb-4 text-center"
                >
                    Verify Your Email
                </motion.h1>

                <p className="text-text-secondary text-center mb-8 text-lg">
                    Sent to <span className="font-semibold text-base-green-medium">{email}</span>
                </p>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        mutate();
                    }}
                    className="space-y-8"
                >
                    <div className="flex justify-center gap-3">
                        {otp.map((value, index) => (
                            <motion.input
                                key={index}
                                ref={el => { inputRefs.current[index] = el; }}
                                type="text"
                                inputMode="numeric"
                                value={value}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                                maxLength={1}
                                disabled={isPending}
                                className="w-14 h-14 text-3xl text-center rounded-xl border-2 border-border-primary 
                                focus:border-base-green-medium focus:ring-4 ring-base-green-light/30
                                transition-all duration-200 bg-base-sage-light shadow-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            />
                        ))}
                    </div>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-center font-medium"
                        >
                            {error}
                        </motion.p>
                    )}

                    {success && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-base-green-dark text-center font-medium"
                        >
                            {success}
                        </motion.p>
                    )}

                    <motion.button
                        type="submit"
                        disabled={isPending || otp.some(num => num === "")}
                        className={`w-full py-4 rounded-xl font-bold text-lg 
                        ${isPending || otp.some(num => num === "")
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-button-primary-bg hover:bg-bg-button-hover"} 
                        text-button-primary-text transition-colors duration-300 shadow-lg`}
                        whileHover={!isPending ? { scale: 1.02 } : {}}
                        whileTap={!isPending ? { scale: 0.98 } : {}}
                    >
                        {isPending ? (
                            <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                Verifying...
                            </motion.span>
                        ) : (
                            "Confirm OTP"
                        )}
                    </motion.button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-text-secondary">
                        Didn&apos;t receive code?{' '}
                        {isCooldown ? (
                            <span className="text-gray-400">
                                Resend available in {formatCooldownTime()}
                            </span>
                        ) : (
                            <button
                                className={`text-base-green-dark font-semibold hover:underline ${resendLoading ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                onClick={handleResendOtp}
                                disabled={resendLoading || isCooldown}
                            >
                                {resendLoading ? "Resending..." : "Resend OTP"}
                            </button>
                        )}
                    </p>
                    {resendMessage && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-base-green-dark text-center font-medium mt-2"
                        >
                            {resendMessage}
                        </motion.p>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default VerifyOtpPage;