import React, { useContext } from 'react';
import NotesContext from '../context/notes/NotesContext';

const NoteItem = (props) => {
    const context = useContext(NotesContext);
    const { note } = props;
    const { deleteNote } = context;
    const onDeleteClick = (id) => {
        deleteNote(id);
    }
    return (
        <>
            <div className='col-md-3 my-3'>
                <div className="card text-bg-light mb-3">
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <h6 className="card-title">{note.title}</h6>
                            <div>
                                <i className="fa-solid fa-trash mx-1" onClick={() => { onDeleteClick(note._id) }}></i>
                                <i className="fa-solid fa-pen-to-square mx-1"></i>
                            </div>
                        </div><hr />
                        <p className="card-text">{note.content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem;