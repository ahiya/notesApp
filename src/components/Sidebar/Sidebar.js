'use client';
import React, { useEffect, useState } from 'react'
import plusIcon from '../../assests/plus.png';
import Image from 'next/image';

function Sidebar({addNote, handleColorChange}) {
  const colors = ['yellow', 'pink', 'cyan', '#95d0ed'];
//   console.log(colors);

const [listOpen, setListOpen] = useState(false);

// useEffect(()=> {
//     console.log(listOpen);
// }, [])
  return (
    <div className='sidebar'>
      {/* <Image src="/images/plus.png" alt='Add' width={50} height={50} onClick={()=>setListOpen(!listOpen)}/> */}
      <Image src="/images/plus.png" alt='Add' width={50} height={50} onClick={()=>addNote('#ebb521')}/>
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
      { 
        colors?.map((color, index) => {
            {/* console.log(item); */}
            return <li 
                key={index} 
                className='sidebar_list_item' 
                style={{backgroundColor: color}}
            onClick={()=>handleColorChange(color)}></li>
        })
      }   
      </ul>
    </div>
  )
}

export default Sidebar
