import Image from 'next/image'
import React from 'react'

function Notes(props) {
  return (
    <div className='note' style={{'backgroundColor': props.note.color}}>
      {/* <textarea value={props.noteData} className='note_text'  placeholder='Write Here' onChange={props.handleChange}></textarea> */}
      {
        (props.note.text.length === 0 || props.note.text ==="") ? 
          <textarea value={props.noteData} className='note_text'  placeholder='Write Here' onChange={props.handleChange}></textarea>
        :
         <p className='note_text'>{props.note.text}</p>
      }
      <p className='note_text_p'>
      <span style={{float: 'left'}}>
        <Image src="/images/delete.png" alt='delete' width={20} height={20} 
            onClick={()=>props.deleteNote(props.note.id)}/></span>
        <span>{props.note.time}</span>
          <span className='note_button' style={{float:'right'}}>
            <button onClick={()=>props.handleUpdate(props.index)}>Submit</button>
          </span>
        </p>
    </div>
  )
}

export default Notes
