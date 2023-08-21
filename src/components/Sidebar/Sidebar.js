'use client';
import React, { useEffect, useState } from 'react'
import plusIcon from '../../assests/plus.png';
import Image from 'next/image';

function Sidebar(props) {
  const colors = ['yellow', 'pink', 'cyan', '#63070d'];
//   console.log(colors);

const [listOpen, setListOpen] = useState(false);

// useEffect(()=> {
//     console.log(listOpen);
// }, [])
  return (
    <div className='sidebar'>
      <Image src="/images/plus.png" alt='Add' width={50} height={50} onClick={()=>setListOpen(!listOpen)}/>
      {/* <img src={plusIcon} alt='add' className='sidebar_image'></img> */}
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
      { 
        colors?.map((item, index) => {
            {/* console.log(item); */}
            return <li 
                key={index} 
                className='sidebar_list_item' 
                style={{backgroundColor: item}}
            onClick={()=>props.addNote(item)}></li>
        })
      }   
      </ul>
    </div>
  )
}

export default Sidebar
