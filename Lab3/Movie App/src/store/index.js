import { configureStore } from '@reduxjs/toolkit';
import CountWishList from "./slices/CountWishList";

export default configureStore({
    reducer: {
        counter: CountWishList,
    },
});