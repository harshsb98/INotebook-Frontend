import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get All Note
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzMWMxNDNkNjExNmY1NmU3MWZjZGY1In0sImlhdCI6MTY0NzQzNjE0NX0.GfYy5W1pGW0tXtjhAF0ikg1vs86_6cqApS9vZZqS8wk",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzMWMxNDNkNjExNmY1NmU3MWZjZGY1In0sImlhdCI6MTY0NzQzNjE0NX0.GfYy5W1pGW0tXtjhAF0ikg1vs86_6cqApS9vZZqS8wk",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = {
      _id: "6244281b7b7r4deaa257csdfd5bd",
      user: "6231c143d6116f56e71fcdf5",
      title: title,
      description: description,
      tag: tag,
      date: "1648633883699",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzMWMxNDNkNjExNmY1NmU3MWZjZGY1In0sImlhdCI6MTY0NzQzNjE0NX0.GfYy5W1pGW0tXtjhAF0ikg1vs86_6cqApS9vZZqS8wk",
      },
    });
    const json = response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzMWMxNDNkNjExNmY1NmU3MWZjZGY1In0sImlhdCI6MTY0NzQzNjE0NX0.GfYy5W1pGW0tXtjhAF0ikg1vs86_6cqApS9vZZqS8wk",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
