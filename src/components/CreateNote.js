import React, { useContext, useState } from 'react';
import NotesContext from '../context/notes/NotesContext';
import { Link, useNavigate } from 'react-router-dom';


function CreateNote() {
    const context = useContext(NotesContext);
    const addNote = context.addNote;
    const navigate = useNavigate();
    const [note, setNote] = useState({ title: "", content: "", tag: "" });

    const handleOnClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.content, note.tag);
        setNote({ title: "", content: "", tag: "" });
        navigate('/');
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className='mt-4'>
                <h4 className="h4">Create New Note</h4>
                <hr />
                <div className='container'>
                    <form onSubmit={handleOnClick}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" value={note.title} onChange={onChange} id="title" name="title" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Description</label>
                            <textarea className="form-control" value={note.content} onChange={onChange} name='content' id="content" style={{ height: "100px" }}></textarea>
                        </div>
                        <div className='d-flex justify-content-between align-self-end'>
                            <button type="submit" className="btn btn-primary">Add Note</button>
                            <p className='d-flex align-bottom'><Link class="link-opacity-100-hover" to="/">Back to Home</Link></p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CreateNote