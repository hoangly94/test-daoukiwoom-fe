import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCookie } from '~utils';
import { indexApi } from './api';
import Cookies from 'universal-cookie';
interface IndexState {
    auth: Auth,
    user: IUser,
}

const cookies = new Cookies();

const initialState = {
    auth: {
        token: cookies.get(process.env.ACCESS_TOKEN_COOKIE ?? '')
    },
    user: {},
} as IndexState

const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.auth.token = action.payload;
        },
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
        },
    },
})

export const { setToken, setUser } = indexSlice.actions
export default indexSlice.reducer