import { createSlice } from "@reduxjs/toolkit";

const getStoredUserInfo = () => {
    const storedUserInfo = localStorage.getItem('userInfo');
    try {
        return storedUserInfo ? JSON.parse(storedUserInfo) : null;
    } catch (error) {
        console.log('Error parsing stored user info:', error);
        localStorage.removeItem('userInfo');
        return null;
    }
};

const initialState = {
    userInfo: getStoredUserInfo(),
};

const userslice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo',JSON.stringify(action.payload));
        },
        userLogout:(state)=> {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        },
        clearUser:(state)=> {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    }
});

export const {setCredentials ,userLogout , clearUser } = userslice.actions;
export default userslice.reducer;