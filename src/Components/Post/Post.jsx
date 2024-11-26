import React, { useEffect } from 'react'
import { getPost,setPost } from '../../redux/slices/postSlice'
import { useDispatch, useSelector } from 'react-redux'


function Post() {
    const dispatch=useDispatch();
    useEffect(()=>{
            dispatch(getPost())
    },[])
  return (
    <div>Post</div>
  )
}

export default Post