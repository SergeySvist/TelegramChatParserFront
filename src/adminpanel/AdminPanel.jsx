import styles from './AdminPanel.module.css';
import UsersList from './UsersList';

function AdminPanel() {

  return (
    <div className={styles.main}>
        <UsersList></UsersList>
    </div>
  );
}

export default AdminPanel;