import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../slices/taskSlice';
import searchTermReducer from '../slices/searchTermSlice';


export const store = configureStore({
    reducer: {
        task: taskReducer,
        searchTerm: searchTermReducer
    }
});