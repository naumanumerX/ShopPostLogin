import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addImage,removeImage } from '../../redux/slices/addImage.slice';

function Home() {
const dispatch=useDispatch();
const res=useSelector(res=>res);

const {imagesSlice}=res;


  const handleSubmit=(e)=>{
    e.preventDefault();
    const url=e.target[0].value;
    console.log("submitted")
   dispatch(addImage(url))


  }
  const deletePic=()=>{
    alert(null)
  }

  return (
    <>
  
  <div  className=' flex items-center justify-center bg-amber-100 min-h-screen'>
    <div className='flex flex-col gap-y-6 w-6/12'>
      <h1 className='text-6xl font-bold text-violet-600'>Paste Image Url</h1>
    
    <div>
    <form   onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
    <input className=' border border-violet-600 rounded-lg w-full p-3'  required type="url"  placeholder='Enter URL : http://localhost:3000/' />
     <div className='flex items-center gap-x-3'>
       <button
        className=' bg-violet-600 text-white rounded px-6 py-2.5 '>SUBMIT 
        
         </button>
         <Link  className="text-semibold text-gray-500" to='/Images'> View</Link>
       </div>
       <div className='grid grid-cols-3 gap-6'>

        {imagesSlice.map((item,index)=>{
      
         return  <img onClick={()=>dispatch((removeImage(index)))} key={index }src={item} alt=""  width={400}/>
      
 } )}
       </div>
     
    </form>
    </div>
    </div>
  </div>
      
    </>
  )
}

export default  Home
