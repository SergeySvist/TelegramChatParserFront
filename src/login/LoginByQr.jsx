import styles from './Login.module.css';

function LoginByQr() {
  return (
    <div className={styles.auth}>
      <div className={styles.qrOuter}>
        <div className={styles.qr}>
          <div className={styles.animatedSticker} style={{width: "54px", height: "54px"}}>
            <canvas width="68" height="68" style={{width: "54px", height: "54px"}}>
            </canvas>
          </div>
        </div>
      </div>
      <h1 className={styles.loginByQrH1}>Log in to Telegram by QR Code</h1>
      <ol>
        <li><span>Open Telegram on your phone</span></li>
        <li><span>Go to Settings &gt; Devices &gt; Link Desktop Device</span></li>
        <li><span>Point your phone at this screen to confirm login</span></li>
      </ol>
      <button type="button" className={styles.anotherLoginButton}>Log in by phone Number</button>
    </div>
  );
}

export default LoginByQr;