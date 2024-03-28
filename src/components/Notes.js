import React, { useContext, useEffect } from 'react';
import NotesContext from '../context/notes/NotesContext';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const provider = useContext(NotesContext);
    const navigate = useNavigate();
    const { notes, getNotes } = provider;

    const goToAdd = ()=>{
        navigate('/createNote');
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }else{
            navigate('/login');
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <h2 className='text-left'>Your Notes</h2>
                </div>
                <hr />
                <div>
                <div className='d-flex justify-content-end mx-3'>
                    <i onClick={goToAdd} className="fa-solid fa-plus"> Add Note</i> 
                </div>
                <div className='container row my-2'>
                    {notes && notes?.map((note) => {
                        return <NoteItem key={note._id} note={note} />;
                    })}
                </div>
                </div>
            </div>
        </>
    )
}

export default Notes