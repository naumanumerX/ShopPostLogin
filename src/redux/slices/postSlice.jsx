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
            setPost(state,action){
                state.loading=true;
                state.data=action.payload;
                state.error=null

            }
            
        }

    })
  

export const {setPost}=postSlice.actions;

export default postSlice.reducer

export const getPost=()=>async(dispatch)=>{

   

    try {
     // alert()
   
  const {data}= await axios({
      method:'get',
      url:'https://jsonplaceholder.typicode.com/posts',
  
  })

  dispatch(setPost(data))
    } catch (error) {
     
      console.log(error.response)
    }
 

}