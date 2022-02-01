import React, {useState, useEffect} from 'react'
import './Chat.css';
import { Avatar } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SearchOutlined from '@material-ui/icons/Search';
import AttachFile from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/KeyboardVoice";

function Chat() {
    const [input,setInput] = useState("");
    const sentMessage = (e) => {
        e.prevenDefault();
        console.log('you typed >>> ', input)
    }
    
    return (
        <div className = 'chat' >
            <div className="chat__header">
            <Avatar src={'https://avatars.dicebear.com/api/human/$[seed].svg'}/>
            <div className='chat__headerInfo'>
                <h3>Room Name</h3>
                <p>Last Seen at...</p>
            </div>
                <div className='chat__headerRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />  
                </IconButton>
                </div>
            </div>
            
            <div className="chat__body">
                <p className={`chat__message &{true &&
                "chat__reciever"}`}>
                    <span className='chat__name'>Loai Amr</span>
                    Hey guys
                    <span className='chat__timestamp'>3:52pm</span>
                    </p>
                
            </div>

            <div className="chat__footer">
            <InsertEmoticonIcon />
              <form >
                  <input value={input} onChange={e =>setInput(e.target.value)} placeholder='type a message' type='text'/>
            <button onClick={sentMessage} type='submit'>Send a message</button>      
            </form>          
            <MicIcon />
            </div>

        </div>
    )
}

export default Chat
