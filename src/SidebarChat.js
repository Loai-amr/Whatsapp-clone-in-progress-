import React, {useState, useEffect} from 'react';
import { Avatar } from "@material-ui/core";
import './SidebarChat.css';


function SidebarChat() {
const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
        
    }, []);

    return (
        <div className='sidebarChat'>
          <Avatar src={'https://avatars.dicebear.com/api/human/${seed1}.svg'}/>
         <div className='sidebarChat_info'>
            <h2>Room Name</h2>
            <p>Last Message...</p>
         </div>
        </div>
    )
}

export default SidebarChat
