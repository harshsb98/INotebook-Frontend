import { useState } from "react";
import noteContext from "./noteContext";

const NoteState =(props)=>{
    const notesInitial=[
        {
          "_id": "624428067b74deaa257cf5bb",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Please Wake up Early",
          "tag": "Personal",
          "date": "1648633862806",
          "__v": 0
        },
        {
          "_id": "6244281b7b74deaa257cf5bd",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Wakie Wakie",
          "tag": "Personal",
          "date": "1648633883699",
          "__v": 0
        },
        {
          "_id": "6244281b7b74deaa257cf5bd",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Wakie Wakie",
          "tag": "Personal",
          "date": "1648633883699",
          "__v": 0
        },
        {
          "_id": "6244281b7b74deaa257cf5bd",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Wakie Wakie",
          "tag": "Personal",
          "date": "1648633883699",
          "__v": 0
        },
        {
          "_id": "6244281b7b74deaa257cf5bd",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Wakie Wakie",
          "tag": "Personal",
          "date": "1648633883699",
          "__v": 0
        },
        {
          "_id": "6244281b7b74deaa257cf5bd",
          "user": "6231c143d6116f56e71fcdf5",
          "title": "My Title",
          "description": "Wakie Wakie",
          "tag": "Personal",
          "date": "1648633883699",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial)

    return(
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;