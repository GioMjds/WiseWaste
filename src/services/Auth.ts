import { API } from "./AxiosURLs";

export const login = async (email: string, password: string) => {
    try {
        const response = await API.post("auth/login", {
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

export const signup = async (email: string, password: string, confirmPassword: string) => {
    try {
        const response = await API.post("auth/register", {
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

export const logout = async () => {
    try {
        const response = await API.post("auth/logout", {}, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error(`Error logging out: ${error}`);
        throw error;
    }
}