import { createSlice } from "@reduxjs/toolkit";
import { CountersStateT,IncrementActionT,DecrementActionT, CounterId } from "./counter.slice.types";

// const initialCounterState:CounterStateT =  {counter:0} ;// изначальное состояние counterов 
const initialCountersState:CountersStateT = {};// изначальное состояние counterов

export const countersSlice = createSlice({
    name:"counters",
    initialState:initialCountersState,
    reducers:{
        increment:(state = initialCountersState, action:IncrementActionT)=>{
            if(!state[action.payload.counterId]){
                state[action.payload.counterId] = {counter:0};
            }
            state[action.payload.counterId]!.counter++;
        },
        decrement:(state = initialCountersState, action:DecrementActionT)=>{
            if(!state[action.payload.counterId]){
                state[action.payload.counterId] = {counter:0};
            }
            state[action.payload.counterId]!.counter--;
        },
    },
    selectors:{
        selectCounter:(state:CountersStateT,counterId:CounterId) => state[counterId]?.counter
    }
});// создаем слайс для счетчиков

