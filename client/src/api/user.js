import axios from 'axios';
import { resolve } from './common.js';
import { FILMPICK_STORAGE, INVALID_TOKEN, setInStorage, getFromStorage, removeFromStorage } from '../utils/storage';

export const registerUser = async (username, password) => {
    return await resolve(
        axios.post(
            "/api/account/register",
            {
                "username": username,
                "password": password
            }
        ).then(res => {
            if (res.data.success) {
                setInStorage(FILMPICK_STORAGE, { token: res.data.token });
            }
            return res.data;
        })
    );
}

export const loginUser = async (username, password) => {
    return await resolve(
        axios.post(
            "/api/account/login",
            {
                "username": username,
                "password": password
            }
        ).then(res => {
            if (res.data.success) {
                setInStorage(FILMPICK_STORAGE, { token: res.data.token });
            }
            return res.data;
        })
    );
}

export const logoutUser = async () => {
    const obj = getFromStorage(FILMPICK_STORAGE);

    if (obj && obj.token) {
        return await resolve(
            axios.get(
                '/api/account/logout', {
                    params: {
                        token: obj.token
                    }
                }
            ).then(res => {
                if (res.data.success) {
                    removeFromStorage(FILMPICK_STORAGE);
                }
                return res.data;
            })
        );
    }
    return INVALID_TOKEN;
}

export const verifyUser = async () => {
    const obj = getFromStorage(FILMPICK_STORAGE);

    if (obj && obj.token) {
        return await resolve(
            axios.get(
                '/api/account/verify', {
                    params: {
                        token: obj.token
                    }
                }
            ).then(res => {
                return res.data;
            })
        );
    }
    return INVALID_TOKEN;
}