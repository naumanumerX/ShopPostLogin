import { combineReducers, configureStore, miniSerializeError } from "@reduxjs/toolkit";
import imagesSlice from './slices/addImage.slice'
import storage from 'redux-persist/lib/storage'
import {  persistReducer } from "redux-persist";

const config={
    key:"root",
    version:1,
    storage: storage // 
}

const slices=combineReducers({

    imagesSlice : imagesSlice      // same as imageSlice:imagesSlice but shows error
})


const store=configureStore({
    reducer:persistReducer(config,slices),
    devTools:true,
    middleware:(setup)=>setup({
        serializableCheck:false
    })
})

export default store;