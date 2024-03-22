import { useEffect, useState } from 'react';
import styles from './AdminPanel.module.css';
import { baseURL } from '../config';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

function UsersListItem({user}) {
    
  return (
    <li>
        <NavLink to={`/admin/users/${user.user_id}`}>
            <button className={styles.mainButton}>
                {user.user_id} {user.username ?? user.first_name ?? user.last_name} | DialogsCount: {user.dialogs_count} | MessageCount: {user.messages_count}
            </button>
        </NavLink>
    </li>   
  );
}

export default UsersListItem;