import ApiManager from "./ApiManager";

export const loginApi = async data => {
    try {
        const result = await ApiManager("/Users/login", {
            method : "POST",
            headers : {
                'content-type' : "application/json",
            },
            data: data
        });
        return result;
    } catch (error) {
        return error.response.data;
    }
};

