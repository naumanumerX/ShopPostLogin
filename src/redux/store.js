import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from './slices/addImage.slice'
const store=configureStore({
    reducer:{
        imagesSlice
    },
    devTools:true

})

export default store;