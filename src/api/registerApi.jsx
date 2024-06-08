import ApiManager from "./ApiManager";

export const registerApi = async data => {
    try {
        const result = await ApiManager("/Users/register", {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            data: data
        });
        return result;
    } catch (error) {
        return error.response.data;
    }
};