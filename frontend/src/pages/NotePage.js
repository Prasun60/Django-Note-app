import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'

const NotePage = ({ match, history }) => {

    let noteId = match.params.id
    console.log('Note ID:', noteId)
    let [note, setNote] = useState(null)
    

    useEffect(async() => {
        await getNote()
    }, [noteId])


    let getNote = async () => {
        if (noteId === 'new') return

        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

    // let createNote = async () => {
    //     await fetch(`/api/notes/`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(note)
    //     })
    //     getNote()
    // }


    // let updateNote = async () => {
    //     await fetch(`/api/notes/${noteId}/`, {
    //         method: "PUT",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(note)
            
    //     })
    //     getNote()
    // }


    // let deleteNote = async () => {
    //     await fetch(`/api/notes/${noteId}/`, {
    //         method: 'DELETE',
    //         'headers': {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     getNote()
    //     history.push('/')
    // }


    let createNote = async () => {
        try {
            let response = await fetch(`/api/notes/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note)
            });
    
            if (response.ok) {
                let data = await response.json();
                setNote(data);
                history.push('/');
            } else {
                console.error('Failed to create note:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error creating note:', error);
        }
    }
    
    let updateNote = async () => {
        try {
            let response = await fetch(`/api/notes/${noteId}/`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note)
            });
    
            if (response.ok) {
                let data = await response.json();
                setNote(data);
                history.push('/');
            } else {
                console.error('Failed to update note:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error updating note:', error);
        }
    }
    
    let deleteNote = async () => {
        try {
            let response = await fetch(`/api/notes/${noteId}/`, {
                method: 'DELETE',
                'headers': {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                setNote(null);
                history.push('/');
            } else {
                console.error('Failed to delete note:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    }
    

    // let handleSubmit = () => {
    //     console.log('NOTE:', note)
    //     if (noteId !== 'new' && note.body == '') {
    //         deleteNote()
    //     } else if (noteId !== 'new') {
    //         updateNote()
    //     } else if (noteId === 'new' && note.body !== null) {
    //         createNote()
    //     }
    //     history.push('/')
    // }

    let handleSubmit = () => {
        console.log('NOTE:', note)
        if (noteId === 'new' && note==null) {
            history.push('/'); // If it's a new note and the body is empty, go back to home directly
        } else if (noteId !== 'new' && note.body === '') {
            deleteNote();
        } else if (noteId !== 'new') {
            updateNote();
        } else if (noteId === 'new' && note.body !== null) {
            createNote();
        } else {
            history.push('/');
        }
    }
    

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
        console.log('Handle Change:', note)
    }

    return (
        <div className="note" >
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {noteId !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}

            </div>
            <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage
