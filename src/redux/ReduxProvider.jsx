'use client';

import { Provider, useDispatch } from "react-redux";
import store from "./store";
import { fetchBlogs } from "@/api/blog";
import { useEffect } from "react";
import { setAllBlogs } from "./slices/blogsSlice";

function GlobalDatas(){
    const dispatch = useDispatch();

      useEffect(() => {
              const fetchAllBlogsData = async () => {
                try {
                  const response = await fetchBlogs();
                  
                  // Safely check if response has the nested data property
                  if (response?.data?.data) {
                    dispatch(setAllBlogs(Array.isArray(response.data.data) ? response.data.data : []));
                  } else {
                    dispatch(setAllBlogs([]));
                  }
                } catch (error) {
                  console.error("Error fetching Blogs:", error);
                  dispatch(setAllBlogs([]));
                }
              };
              fetchAllBlogsData();
            }, [dispatch]); 
}

export default function ReduxProvider({children}){

    
    return <Provider store={store}>
        <GlobalDatas/>
        {children}</Provider>
}