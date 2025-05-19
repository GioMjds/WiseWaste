import { API } from "./AxiosURLs";

export const login = async (email: string, password: string) => {
    try {
        const response = await API.post("auth/login", {
            action: "login",
            email: email,
            password: password,
        }, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error(`Error logging in: ${error}`);
        throw error;
    }
};

export const sendRegisterOtp = async (email: string, password: string, confirmPassword: string) => {
    try {
        const response = await API.post("auth/send_register_otp", {
            action: "send_register_otp",
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error(`Error registering: ${error}`);
        throw error;
    }
};

export const verifyRegisterOtp = async (email: string, otp: string) => {
    try {
        const response = await API.post('auth/verify_register_otp', {
            email: email,
            otp: otp,
        }, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error(`Error verifying OTP: ${error}`);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await API.post("auth/logout", {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error(`Error logging out: ${error}`);
        throw error;
    }
};