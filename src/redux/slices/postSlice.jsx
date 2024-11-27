import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'


 const initialState={
    loading:null,
    data:null,
    error:null
    
}



    const postSlice=createSlice({
        name:"post",
        initialState,
       
        reducers:{

            setLoding(state,action)
            {
                state.loading=action.payload
            },
            setData(state,action)
            {
                state.data=action.payload
            },
            setError(state,action)
            {
                state.error=action.payload
            }
            
        }

    })
  

export const {setLoding,setError,setData}=postSlice.actions;

export default postSlice.reducer

export const getPost=()=>async(dispatch)=>{

   

    try {
     // alert()
     dispatch(setLoding(true))
   
  const {data}= await axios({
      method:'get',
      url:'https://jsonplaceholder.typicode.com/posts',
  
  })
  dispatch(setLoding(false))
  dispatch(setData(data))
  
    } catch (error) {
        dispatch(setLoding(false))
     dispatch(setError(error.response.data))
      
    }
 

}