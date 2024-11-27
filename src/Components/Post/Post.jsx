import React, { useEffect } from 'react'
import { getPost,setPost } from '../../redux/slices/postSlice'
import { useDispatch, useSelector } from 'react-redux'


function Post() {
    const dispatch=useDispatch();
    const post=useSelector(res=>res.postSlice);
    console.log(post)
    useEffect(()=>{
            dispatch(getPost())
    },[])
  return (

<>
    {
      post.loading&&<div className='flex items-center justify-center bg-red-100 min-h-screen'>

      <h1 className='text-2xl bg-white p-3 px-5  rounded-lg '> Loading...</h1>
      
      </div>
    }
    {
     (  post.loading===false&&post.data)&&<div className=' flex flex-col gap-y-4 p-8 md:px-0 md:py-16  items-center bg-red-100 min-h-screen animate__animated animate__zoomIn'>

     
        {
          post.data.map((item,index)=>(
            <div key={index}className='p-5 md:w-3/4 bg-white rounded-lg shadow-sm'>

                <h1 className='font-semibold text-2xl '>{item.title}</h1>
                <p className='text-slate-500'>{item.body}</p>
            </div>
          

          ))
        }
     
      
      </div>


    }
     {
     (  post.loading===false&&post.error)&&<div className='flex items-center justify-center bg-red-100 min-h-screen'>

      <h1 className='text-2xl font-semibold bg-red-500 p-3 px-5 text-white rounded-lg '> Something Went Wrong</h1>
      
      </div>

      
    }
    </>
  )
  
}

export default Post