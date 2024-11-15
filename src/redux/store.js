import { combineReducers, configureStore, miniSerializeError } from "@reduxjs/toolkit";
import imagesSlice from './slices/addImage.slice'
import storage from 'redux-persist/lib/storage'
import {  persistReducer } from "redux-persist";
import rememberSlice from './slices/rememberSlice'


import authSlice from './slices/authSlice'

const config={
    key:"root",
    version:1,
    storage: storage // 
}

const slices=combineReducers({

    imagesSlice : imagesSlice ,     // same as imageSlice:imagesSlice but shows error
    authSlice,
    rememberSlice
})


const store=configureStore({
    reducer:persistReducer(config,slices),
    devTools:true,
    middleware:(setup)=>setup({
        serializableCheck:false
    })
})

export default store;