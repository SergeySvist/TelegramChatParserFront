import styles from './App.module.css';
import LoginByPhone from './login/LoginByPhone';
import LoginByQr from './login/LoginByQr';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.authForm}>
        {/* <LoginByQr></LoginByQr> */}
        <LoginByPhone></LoginByPhone>
      </div>
    </div>
  );
}

export default App;
