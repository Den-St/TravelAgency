import { configureStore } from "@reduxjs/toolkit";
import { countersSlice } from "./features/Counters/slice/counter.slice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        [countersSlice.name]:countersSlice.reducer,
    }
});

type AppState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();