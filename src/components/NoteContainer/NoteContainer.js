import React, { useEffect } from 'react'
import Notes from '../Notes/Notes'

function NoteContainer({notes, deleteNote, noteData, handleChange, handleUpdate}) {
    // const notes = props.notes.reverse();

    // useEffect(()=> {
    //     console.log(props.deleteNote);
    // }, [])
  return (
    <div className='note-container'>
        <h1 style={{color :'#000', fontSize : '20px', paddingBottom : '20px'}}>Notes</h1>
        <div className='note-container_notes'>
            { notes.length > 0 ? (
                    notes.map((item, index)=> <Notes key={item.id} note={item}
                         index ={index}
                         deleteNote={deleteNote}
                         noteData={noteData}
                         handleChange={handleChange}
                         handleUpdate={handleUpdate}
                    />)
                ):(
                    <h1>Note not Present</h1>
                )}
        </div>
    </div>
  )
}

export default NoteContainer
