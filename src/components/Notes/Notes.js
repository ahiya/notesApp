import Image from 'next/image'
import React from 'react'

function Notes(props) {
  return (
    <div className='note' style={{'backgroundColor': props.note.color}}>
      <textarea className='note_text' defaultValue={props.note.text} placeholder='Write Here'></textarea>
      <p className='note_text_p'>
        <span>{props.note.time}</span><span style={{float: 'right'}}>
        <Image src="/images/delete.png" alt='delete' width={20} height={20} 
            onClick={()=>props.deleteNote(props.note.id)}/></span>
        </p>
    </div>
  )
}

export default Notes
