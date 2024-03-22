import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import CodeInput from './login/CodeInput';
import LoginByPhone from './login/LoginByPhone';
import LoginByQr from './login/LoginByQr';
import RedirectToLogin from './login/RedirectToLogin';
import Error from './errorpage/Error';
import AdminPanel from './adminpanel/AdminPanel';
import DialogsList from './adminpanel/DialogsList';
import MessagesList from './adminpanel/MessagesList';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.customScroll}>
        <BrowserRouter>
            <Routes>
              <Route path="/admin" >
                  <Route index element={<AdminPanel></AdminPanel>}></Route>
                  <Route path='users/:id' element={<DialogsList></DialogsList>}></Route>
                  <Route path='dialogs/:userid/:id/:title' element={<MessagesList></MessagesList>}></Route>
              </Route>
            </Routes>
        </BrowserRouter>

        <div className={styles.authForm}>
          <MemoryRouter>
            <Routes>
              <Route path="/login" element={<LoginByQr/>} />
              <Route path="/phonelogin" element={<LoginByPhone/>} />
              <Route path="/codelogin" element={<CodeInput/>} />
              <Route path="/error" element={<Error/>} />
              <Route path="/" element={<RedirectToLogin></RedirectToLogin>} />
            </Routes>
          </MemoryRouter>
        </div>

      </div>
    </div>
  );
}

export default App;
