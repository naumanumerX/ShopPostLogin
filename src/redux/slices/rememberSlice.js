import { createSlice } from "@reduxjs/toolkit"

const rememberSlice=createSlice({
    name:"rememberSlice",
    initialState:{
        checked:false,
        email:"",
        password:""

    },
    reducers:{
        setRemember(state,action){
            state.checked=true;
            state.email=action.payload.email;
            state.password=action.payload.password
        },
        eraseRemember(state){
            state.checked=false;
            state.email=" ";
            state.password=" "

        }

    }
})
export const{setRemember,eraseRemember}=rememberSlice.actions;
export default rememberSlice.reducer;