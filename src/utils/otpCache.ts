interface OtpCacheEntry {
    otp: string;
    hashedPassword: string;
    expiresAt: Date;
}

const otpCache = new Map<string, OtpCacheEntry>();

setInterval(() => {
    const now = new Date();
    otpCache.forEach((entry, email) => {
        if (entry.expiresAt < now) {
            otpCache.delete(email);
        }
    });
}, 5 * 60 * 1000);

export const otpStorage = {
    set: (email: string, otp: string, hashedPassword: string, ttlMinutes = 15) => {
        const expiresAt = new Date(Date.now() + ttlMinutes * 60 * 1000);
        otpCache.set(email, { otp, hashedPassword, expiresAt });
    },
    get: (email: string) => otpCache.get(email),
    delete: (email: string) => otpCache.delete(email),
    validate: (email: string, userOtp: string) => {
        const entry = otpCache.get(email);
        if (!entry) return { valid: false, error: "OTP not found" };
        if (entry.otp !== userOtp) return { valid: false, error: "Invalid OTP" };
        if (new Date() > entry.expiresAt) return { valid: false, error: "OTP expired" };
        return { valid: true, data: { hashedPassword: entry.hashedPassword } };
    }
};