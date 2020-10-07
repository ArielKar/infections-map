const BASE_URL = 'http://localhost:8080/api';
const SUCCESS_STATUS = 200;

export const fetchUser = async (id: string) => {
    try {
        const url = `${BASE_URL}/user/${id}`;
        const resp = await fetch(url);
        if (resp.status !== SUCCESS_STATUS) {
            throw new Error('Unable to fetch user');
        }
        const data = await resp.json();
        return data.user;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export const fetchInfections = async (id: String) => {
    try {
        const url = `${BASE_URL}/user/${id}/infections`;
        const resp = await fetch(url);
        if (resp.status !== SUCCESS_STATUS) {
            throw new Error('Unable to fetch infections');
        }
        const data = await resp.json();
        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
};