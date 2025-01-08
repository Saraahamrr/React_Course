import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value : 0 ,
    maxCounter: 10,
}


const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increaseCounter: (state, action) => {
            state.value = action.payload;
        },
        decreaseCounter: (state, action) => {
            state.value = action.payload;
        },
        resetCounter: (state) => {
            state.value = 0;
        },
        inccreaseByCount : (state,payload) => {
            state.value = state.value + payload
        }
    }
});

export const {increaseCounter,
    decreaseCounter,
    resetCounter,
    inccreaseByCount} = counter.actions;

export default counter.reducer;