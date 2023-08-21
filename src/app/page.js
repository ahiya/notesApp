'use client';
import NoteContainer from "@/components/NoteContainer/NoteContainer";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";

export default function Home() {
  const [notes, setNote] = useState([]);
  const [note, setData] = useState("");
  // const [note, setData] = useState("");

  const addNote=(color)=>{
      // notes.unshift({
      //   id: Date.now() + "" +Math.floor(Math.random()*100),
      //   text: "",
      //   time: Date.now(),
      //   color:color
      // });
      // setNote(notes);
      // console.log(notes);
      if(notes.length <= 0) {
        setNote([...notes, {
          id: Date.now() + "" +Math.floor(Math.random()*100),
          text: "",
          time: Date.now(),
          color:color
        }])
      } else{
        if(note !== "" && note.length > 0){
          setNote([...notes, {
            id: Date.now() + "" +Math.floor(Math.random()*100),
            text: note,
            time: Date.now(),
            color:color
          }]);
        } else if(notes[notes.length-1]['text'] !== ""){
          setNote([...notes, {
            id: Date.now() + "" +Math.floor(Math.random()*100),
            text: "",
            time: Date.now(),
            color:color
          }]);
        }
      }
  }

  const handleColorChange=(color)=>{
    const tempNotes = [...notes];
    tempNotes[notes.length-1]['color'] = color;
      setNote(tempNotes);
  }

  //update note
  const handleUpdate=(id)=>{
    const tempNotes = [...notes];
    // if(notes)
    tempNotes[id]['text'] = note;
    setNote(tempNotes);
    setData("");
  }

  //
  const handleChange=(event)=>{
    const {value} = event.target;
    // console.log(id);
    setData(value);
    // console.log(value);
  }

  //delete note
  const deleteNote=(id)=>{
    const tempNotes = [...notes];
    const index=tempNotes.findIndex(item=>item.id === id)
    if(index<0) return 

    tempNotes.splice(index, 1);
    setNote(tempNotes)
  }
  return (
    <main className="">
      <Sidebar addNote={addNote} handleColorChange={handleColorChange}/>
      <NoteContainer 
        notes={notes} 
        deleteNote={deleteNote}
        noteData={note}
        handleChange={handleChange}
        handleUpdate={handleUpdate}
      />

    </main>
  )
}
