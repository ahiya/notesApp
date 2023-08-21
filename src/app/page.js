'use client';
import NoteContainer from "@/components/NoteContainer/NoteContainer";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";

export default function Home() {
  const [notes, setNote] = useState([]);

  const addNote=(color)=>{
    const tempNotes=[...notes];
    tempNotes.push({
      id: Date.now() + "" +Math.floor(Math.random()*45),
      text: "",
      time: Date.now(),
      color:color
    });
    setNote(tempNotes);
  }

  const deleteNote=(id)=>{
    const tempNotes = [...notes];
    const index=tempNotes.findIndex(item=>item.id === id)
    if(index<0) return 

    tempNotes.splice(index, 1);
    setNote(tempNotes)
  }
  return (
    <main className="">
      <Sidebar addNote={addNote}/>
      <h1>This Ahiya local Branch </h1>
      <NoteContainer 
        notes={notes} 
        deleteNote={deleteNote}
      />

    </main>
  )
}
