import { useEffect, useState } from 'react';
import styles from './AdminPanel.module.css';
import { baseURL } from '../config';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

function DialogsListItem({dialog, userid, dialogid}) {
    
  return (
    <li>
        <NavLink to={`/admin/dialogs/${userid}/${dialogid}/${dialog.title}`}>
            <button className={styles.mainButton}>
                {dialog.dialog_id} {dialog.title} | Type: {dialog.type} | MessageCount: {dialog.message_count}
            </button>
        </NavLink>
    </li>   
  );
}

export default DialogsListItem;