import { useEffect, useState } from 'react';
import styles from './AdminPanel.module.css';
import { baseURL } from '../config';
import axios from 'axios';
import UsersListItem from './UsersListItem';
import { useParams } from 'react-router-dom';
import DialogsListItem from './DialogsListItem';

function DialogsList() {
    const {id} = useParams();
    const [dialogs, setDialogs] = useState([]);
    const [dialogIds, setDialogIds] = useState([]);

    useEffect(()=>{
        axios.get(baseURL, {params:{value: 'dialogs', user_id: id}})
        .then((response)=>{
            setDialogs(Object.values(response.data[0].dialogs));
            setDialogIds(Object.keys(response.data[0].dialogs));
        })
        .catch((serverError) =>{
            
        });

    }, []);
  return (
    <div className={styles.main}>
        <h2>Dialogs List</h2>
        <ul>
            {
                dialogs.map((dialog, index)=><DialogsListItem dialog={dialog} userid={id} dialogid={dialogIds[index]} key={dialog.dialog_id}></DialogsListItem>)   
            }
        </ul>
    </div>
  );
}

export default DialogsList;