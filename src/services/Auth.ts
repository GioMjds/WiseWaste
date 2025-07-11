import { API } from "./AxiosURLs";

export const login = async (email: string, password: string) => {
    try {
        const response = await API.post(
            "auth/action/login",
            {
                action: "login",
                email: email,
                password: password,
            },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error) {
        console.error(`Error logging in: ${error}`);
        throw error;
    }
};

export const sendRegisterOtp = async (
    email: string,
    password: string,
    confirmPassword: string,
) => {
    try {
        const response = await API.post(
            "auth/action/send_register_otp",
            {
                action: "send_register_otp",
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error) {
        console.error(`Error registering: ${error}`);
        throw error;
    }
};

export const resendRegisterOtp = async (email: string) => {
    try {
        const response = await API.post(
            "auth/action/resend_register_otp",
            {
                action: "resend_register_otp",
                email: email,
            },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error) {
        console.error(`Error resending OTP: ${error}`);
        throw error;
    }
};

export const verifyRegisterOtp = async (email: string, otp: string) => {
    try {
        const response = await API.post(
            "auth/action/verify_register_otp",
            {
                action: "verify_register_otp",
                email: email,
                otp: otp,
            },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error) {
        console.error(`Error verifying OTP: ${error}`);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await API.post(
            "auth/action/logout",
            {
                action: "logout",
            },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error) {
        console.error(`Error logging out: ${error}`);
        throw error;
    }
};

export const updateProfile = async (profileData: {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    profileImage?: string;
    userId: string;
}) => {
    try {
        const response = await API.patch("auth/profile", profileData, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating profile: ${error}`);
        throw error;
    }
};
