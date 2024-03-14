import { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function LoginByPhone() {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);

  return (
    <div className={styles.auth} style={{padding: "45px 0px 0px 0px"}}>
        <div className={styles.logo}></div>
        <h1 className={styles.loginByPhoneH1}>Telegram</h1>
        <p className={styles.note}>Please confirm your country code and enter your phone number.</p>
        <div className={styles.dropdownMenu}>
            <div className={styles.inputgroup} onClick={() => setOpen(!open)}>
                <input className={styles.formInput} type="text" id="sign-in-phone-code" autoComplete="off" onBlur={() => setOpen(false)} on/>
                <label className={styles.inputLabel}>Country</label>
                <i className={open ? `${styles.cssIconDown} ${styles.open}` : styles.cssIconDown}></i>
            </div>
        </div>
        <div className={styles.form}>
            <div className={styles.inputgroup}>
                    <input className={styles.formInput} type="text" id="sign-in-phone-number" dir='auto' inputMode='tel' autoComplete="off" onChange={(e) => setCount(e.target.value.length)}/>
                    <label className={styles.inputLabel}>Your phone number</label>      
            </div>
            <label className={styles.checkbox}>
                <input type="checkbox" id="sign-in-keep-session" defaultChecked/>
                <div className={styles.checkboxMain}>
                    <span className={styles.label} dir="auto">Keep me signed in</span>
                </div>
            </label>
            <div style={{marginTop: "44px"}}>
                {count>5 ? <Link to="/codelogin"><button type="submit" className={styles.nextButton}>Next</button></Link>:""}
                <Link to="/">
                    <button type="button" className={styles.anotherLoginButton} style={{marginTop: "16px"}}>Log in by QR Code</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default LoginByPhone;