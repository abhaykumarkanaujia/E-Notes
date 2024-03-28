import React from 'react';
import NotesContext from './NotesContext';
import { useState } from 'react';

const NotesState = (props) => {
    const baseUrl = "http://localhost:3001/api/notes"
    const notesInitial = [];
    // eslint-disable-next-line

    const [notes, setNotes] = useState(notesInitial);

    // API Call to Fetch All Notes
    const getNotes = async () => {
        try{

            const response = await fetch(`${baseUrl}/fetch-notes`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')
                }
            });
    
            const json = await response.json();
    
            setNotes(json);

        }catch(err){
            console.log(err);
        }
   
    }


    // API call to Add Note in Database
    const addNote = async (title, content, tag) => {
        try{
            const response = await fetch(`${baseUrl}/add-note`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')
                },
                body: JSON.stringify({ title, content, tag })
            });
            const json = await response.json();
            setNotes(notes.concat(json));

        }catch(err){
            console.log(err);
        }
        
    }


    // API call to deleteNote from Database
    const deleteNote = async (id) => {
        try{

            const response = await fetch(`${baseUrl}/delete-note/${id}`, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token')
                }
            });
    
            const json = await response.json();
            const newNotes = notes?.filter((note) => { return note._id !== json.deleted._id })
            setNotes(newNotes);

        }catch(err){
            console.log(err);
        }
        
    }

    const editNote = (id, note) => {
        try{
            console.log("edit Called " + id);
        }catch(err){
            console.log(err);
        }
        
    }

    return (
        <>
            <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
                {props.children}
            </NotesContext.Provider>
        </>
    )
}

export default NotesState;