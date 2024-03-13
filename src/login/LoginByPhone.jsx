import styles from './Login.module.css';

function LoginByPhone() {
  return (
    <div className={styles.auth} style={{padding: "45px 0px 0px 0px"}}>
        <div className={styles.logo}></div>
        <h1 className={styles.loginByPhoneH1}>Telegram</h1>
        <p className={styles.note}>Please confirm your country code and enter your phone number.</p>
        <div className={styles.dropdownMenu}>
            <div className={styles.inputgroup}>
                <input className={styles.formInput} type="text" id="sign-in-phone-code" autoComplete="off"/>
                <label>Country</label>
                <i className={styles.cssIconDown}></i>
                
            </div>
        </div>
        <div className={styles.form}>
            <div className={styles.inputgroup}>
                    <input className={styles.formInput} type="text" id="sign-in-phone-number" dir='auto' inputMode='tel' autoComplete="off"/>
                    <label>Your phone number</label>                
            </div>
            <label className={styles.checkbox}>
                <input type="checkbox" id="sign-in-keep-session" checked/>
                <div className={styles.checkboxMain}>
                    <span className={styles.label} dir="auto">Keep me signed in</span>
                </div>
            </label>
            <button type="button" className={styles.anotherLoginButton} style={{marginTop: "44px"}}>Log in by QR Code</button>
        </div>
    </div>
  );
}

export default LoginByPhone;