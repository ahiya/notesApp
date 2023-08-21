import React, { useEffect } from 'react'
import Notes from '../Notes/Notes'

function NoteContainer(props) {
    const notes = props.notes.reverse();
    // useEffect(()=> {
    //     console.log(props.deleteNote);
    // }, [])
  return (
    <div className='note-container'>
        <h1 style={{color :'#000', fontSize : '20px', paddingBottom : '20px'}}>This Ahiya local Branch </h1>
        {/* <h1></h1> */}
        <div className='note-container_notes'>
            { notes.length > 0 ? (
                    notes.map((item)=> <Notes key={item.id} note={item}
                         deleteNote={props.deleteNote}
                    />)
                ):(
                    <h1>Note not Present</h1>
                )}
        </div>
    </div>
  )
}

export default NoteContainer
