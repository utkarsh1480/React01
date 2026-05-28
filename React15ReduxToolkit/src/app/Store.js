import { configureStore } from '@reduxjs/toolkit'
import todoreducer from '../features/Todo/todoSlice'


export const Store = configureStore({
    reducer: todoreducer
});

