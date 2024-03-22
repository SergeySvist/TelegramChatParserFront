import { useEffect, useState } from 'react';
import styles from './AdminPanel.module.css';
import { baseURL } from '../config';
import axios from 'axios';
import UsersListItem from './UsersListItem';

function UsersList() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get(baseURL, {params:{value: 'users'}})
        .then((response)=>{
            setUsers(Object.values(response.data));
        })
        .catch((serverError) =>{
            
        });

    }, []);
  return (
    <div className={styles.users}>
        <h2>Users List</h2>
        <ul>
            {
                users.map(user=><UsersListItem user={user} key={user.user_id}></UsersListItem>)   
            }
        </ul>
    </div>
  );
}

export default UsersList;