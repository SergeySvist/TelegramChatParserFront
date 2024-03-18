import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import CodeInput from './login/CodeInput';
import LoginByPhone from './login/LoginByPhone';
import LoginByQr from './login/LoginByQr';
import Error from './errorpage/Error';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.customScroll}>
        <div className={styles.authForm}>
          <Routes>
            <Route path="/" element={<LoginByQr/>} />
            <Route path="/phonelogin" element={<LoginByPhone/>} />
            <Route path="/codelogin" element={<CodeInput/>} />
            <Route path="/error" element={<Error/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
