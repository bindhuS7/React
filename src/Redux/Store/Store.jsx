import {configureStore} from "@reduxjs/toolkit"
import CounterReducers from "../features/Counter/CounterSlice"
export const Store=configureStore({
    reducer:{
       counter:CounterReducers
    }
})