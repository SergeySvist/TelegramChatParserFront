import { useEffect, useState } from 'react';
import styles from './AdminPanel.module.css';
import { baseURL } from '../config';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

function MessagesListItem({message}) {
    
  return (
    <li>
        <button className={styles.mainButton}>
            From: {message.from_id} | Message: {message.message} | Date: {new Date(message.date * 1000).toLocaleString()}
        </button>
    </li>   
  );
}

export default MessagesListItem;