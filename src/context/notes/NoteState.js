import noteContext from "./noteContext";
import { useState } from "react";

const NoteState =(props)=>{
    const s1={
        "name":"Harry",
        "class":"5a"
    }

    const [state,setState]= useState(s1);
    const update=()=>{
        setTimeout(()=>{
            setState({
                "name":"larry",
                "class":"10f"
            })
        },1000)
    }
    return(
        <noteContext.Provider value={{state,update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;