import React from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { removeImage } from '../../redux/slices/addImage.slice';


function Images() {
  const res=useSelector((res)=>res);
  const{imagesSlice}=res;
  const dispatch=useDispatch()

  return (
    <div >

<div className='grid grid-cols-3 gap-6'>

{imagesSlice.map((item,index)=>{

 return  <img  onClick={()=>dispatch((removeImage(index)))}  key={index }src={item} alt=""  width={400}/>

} )}
</div>
    </div>
  )
}

export default Images