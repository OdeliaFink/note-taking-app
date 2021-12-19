import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is my first notes',
      date: '15/04/2021',
    },
    {
      id: nanoid(),
      text: 'this is my secnod notes',
      date: '15/34/2001',
    },
    {
      id: nanoid(),
      text: 'this is my third notes',
      date: '20/04/2021',
    },
    {
      id: nanoid(),
      text: 'this is my fourth notes',
      date: '15/04/2021',
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    //filter creates new array with everything that doesn't match
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
