import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    allBlogsData: [],
}

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: INITIAL_STATE,
    reducers: {
        setAllBlogs:(state,action) => {
            state.allBlogsData = Array.isArray(action.payload) ?
            action.payload : [] ;
        }
    }
})

export const { setAllBlogs } = blogsSlice.actions;

export default blogsSlice.reducer;

