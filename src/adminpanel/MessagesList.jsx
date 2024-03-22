import { useEffect, useState } from 'react';
import styles from './AdminPanel.module.css';
import { baseURL } from '../config';
import axios from 'axios';
import UsersListItem from './UsersListItem';
import { useParams } from 'react-router-dom';
import DialogsListItem from './DialogsListItem';
import MessagesListItem from './MessageListItem';

function MessagesList() {
    const {userid, id, title} = useParams();
    const [messages, setMessages] = useState([]);
    useEffect(()=>{
        axios.get(baseURL, {params:{value: 'messages', user_id: userid, dialog_id: id}})
        .then((response)=>{
            setMessages(Object.values(response.data).sort((a,b)=>{
                if(a.message_id < b.message_id)
                    return 1;
                if(a.message_id > b.message_id)
                    return -1;
                return 0;
            }));
        })
        .catch((serverError) =>{
            
        });

    }, []);
  return (
    <div className={styles.main}>
        <h2>{title}</h2>
        <ul>
            {
                messages.map((message, index)=><MessagesListItem message={message} key={message.message_id}></MessagesListItem>)   
            }
        </ul>
    </div>
  );
}

export default MessagesList;