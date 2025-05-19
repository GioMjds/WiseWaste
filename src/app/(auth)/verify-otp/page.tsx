/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { verifyRegisterOtp } from "@/services/Auth";

const VerifyOtpPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";
    const [otp, setOtp] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const { mutate, isPending } = useMutation({
        mutationFn: async (otpValue: string) => {
            return await verifyRegisterOtp(email, otpValue);
        },
        onSuccess: (response) => {
            if (response.status === 200) {
                setSuccess("OTP verified! Redirecting...");
                setError(null);
                router.push("/");
            }
        },
        onError: (err: any) => {
            console.error(`Error verifying OTP: ${err}`);
            setError(err?.response?.data?.error || "Invalid OTP or server error.");
            setSuccess(null);
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!otp) {
            setError("Please enter the OTP.");
            return;
        }
        mutate(otp);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-primary">
            <div className="bg-white/90 shadow-xl rounded-2xl p-8 w-full max-w-md border border-border-primary">
                <h1 className="text-2xl font-bold text-base-green-dark mb-4 text-center">
                    Verify Your Email
                </h1>
                <p className="text-text-secondary text-center mb-6">
                    Enter the 6-digit OTP sent to <span className="font-semibold">{email}</span>
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        maxLength={6}
                        value={otp}
                        onChange={e => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-base-sage-light text-base-green-dark text-center tracking-widest text-lg"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-600 text-sm">{success}</p>}
                    <button
                        type="submit"
                        disabled={isPending}
                        className={`w-full py-2 rounded-lg bg-button-primary-bg text-button-primary-text font-semibold hover:bg-bg-button-hover transition-colors duration-200 shadow-md ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isPending ? "Verifying..." : "Verify OTP"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtpPage;