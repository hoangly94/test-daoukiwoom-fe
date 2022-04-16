import { AppState } from "~store";

export const prepareHeaders = (headers, { getState }) => {
    const token = (getState() as AppState).index.auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
        headers.set('authorization', `Bearer ${token}`)
    }

    return headers
}

export const parseExpiredTime = (str?: string) => {
    if(!str) return 0;
    if(str.slice(-1) === 's')
        return +str.slice(0,-1)*1000
    return 0
}
