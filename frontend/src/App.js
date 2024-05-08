import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/note';

const App = () => {
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/notes').then((res) => {
      console.log(res.data);
      setNotes(res.data);
    });
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    console.log('Note added - ', notes);
    axios
      .post('http://localhost:4000/notes', {
        title,
        content,
      })
      .then((res) => {
        console.log(res.data);
        setNotes([...notes, res.data]);
        setTitle('');
        setContent('');
      })
      .catch((err) => console.log(err));
  };

  const deleteNote = (id) => {
    axios
      .delete(`http://localhost:4000/notes/${id}`)
      .then((res) => {
        console.log(res.data);
        setNotes(notes.filter((note) => note._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="w-screen bg-yellow-400 text-white text-xl font-medium py-4 pl-4">
        Keeper
      </h1>
  
      <form
        onSubmit={addNote}
        className="py-2 shadow-xl rounded-lg px-5 w-1/3 mx-auto text-left mt-10 relative"
      >
        <input
          className="block shadow w-full mx-auto px-2 py-2 my-2 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <textarea
          placeholder="Write your note here..."
          rows={4}
          className="block shadow w-full mx-auto my-2 px-2 py-4 rounded-lg"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
        />
  
        <button
          className="text-yellow-800 text-lg px-2 py-1 rounded-full"
          type="submit"
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            backgroundColor: '#f4d35e',
            border: 'none',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span>Add</span>
        </button>
      </form>
  
      <div className="grid grid-cols-4 gap-4 p-2">
        {notes &&
          notes.map((note) => (
            <Note
              key={note._id}
              id={note._id}
              title={note.title}
              content={note.content}
              deleteNote={() => deleteNote(note._id)}
            />
          ))}
      </div>
    </div>
  );
  
};

export default App;
