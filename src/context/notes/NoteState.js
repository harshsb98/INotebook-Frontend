import { useState } from "react";
import noteContext from "./noteContext";

const NoteState =(props)=>{
    const notesInitial=[
        {
          "_id": "624428067fdqb74deaa257cf5bb",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Please Wake up Early",
          "tag": "Personal",
          "date": "1648633862806",
          "__v": 0
        },
        {
          "_id": "62q44281b7bqwq74deaa257cf5bd",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Wakie Wakie",
          "tag": "Personal",
          "date": "1648633883699",
          "__v": 0
        },
        {
          "_id": "62ew44281bew7b74deaa257cf5bd",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Wakie Wakie",
          "tag": "Personal",
          "date": "1648633883699",
          "__v": 0
        },
        {
          "_id": "6244e281bqw7b74deaa257cf5bd",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Wakie Wakie",
          "tag": "Personal",
          "date": "1648633883699",
          "__v": 0
        },
        {
          "_id": "6244281br7b7as4deaa257cf5bd",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Wakie Wakie",
          "tag": "Personal",
          "date": "1648633883699",
          "__v": 0
        },
        {
          "_id": "6244281b7b7r4deaa257cfd5bd",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Wakie Wakie",
          "tag": "Personal",
          "date": "1648633883699",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial)

      //Add a Note
      const addNote=(title, description,tag)=>{
        // TODO: API call
        const note= {
          "_id": "6244281b7b7r4deaa257csdfd5bd",
          "user": "6231c143d6116f56e71fcdf5",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "1648633883699",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }
      // Delete a Note
      const deleteNote=()=>{
        
      }
      //Edit a Note
      const editNote=()=>{
        
      }

    return(
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;