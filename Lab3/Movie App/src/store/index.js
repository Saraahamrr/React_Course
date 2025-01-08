import { configureStore } from '@reduxjs/toolkit';
import CountWishList from "./slices/CountWishList";
import  language  from './slices/Language';

export default configureStore({
    reducer: {
        counter: CountWishList,
        language: language,
    },
});