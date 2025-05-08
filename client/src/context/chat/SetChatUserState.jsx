import React, { useState } from 'react'
import ChatContext from './ChatContext'
import axios from "axios";
const SetChatUserState = (props) => {
    const [user, setuser] = useState("")
    const [Chat,setChat]=useState([])
    const setchatuser = (cdata) => {
        setuser(cdata);
    }
    const fetchchat=(roomName)=>{
        try {

            const host = `https://mancmint.onrender.com/api/chat/${roomName}`;
            axios.get(host)
              .then(function (response) {
                setChat(response.data)
                console.log(response.data);
                console.log("heyy")
      
              })
              .catch(function (error) {
                console.log("hey")
              });
          }
          catch {
      
          }

    }
    return (
        <ChatContext.Provider value={{user, setchatuser,fetchchat,Chat }}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default SetChatUserState