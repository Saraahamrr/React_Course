import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    lang : 'en',
    options : ['en','ar'],
};

export const language = createSlice({
    name : 'language',
    initialState,
    reducers : {
        changeLanguage : (state,action) => {
            state.lang = action.payload;
            state.options = action.payload
        }
    }
})

export const {changeLanguage} = language.actions;
export default language.reducer;