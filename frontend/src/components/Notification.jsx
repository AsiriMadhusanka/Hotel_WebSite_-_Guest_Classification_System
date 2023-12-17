import { useState, useEffect } from "react";
import bell from "../images/bell.svg";
import styles from "./notification.module.css";

const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, msg: "A cocktail party and a DJ night have been planned for you for the evening of September 14, 2022. On that evening, every meal purchased from the restaurant will be discounted by 10%." },
    // { id: 2, msg: "another notification" },
  ]);
  const [open, setOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    setNotificationCount(notifications.length);
  }, [notifications]);

  function handleNotifications() {
    setOpen(!open);
    setNotificationCount(0);
  }

  return (
    <div className={styles.notification} onClick={handleNotifications}>
      <img src={bell} alt="notification icon" />
      {notificationCount > 0 && (
        <div className={styles.number}>{notificationCount}</div>
      )}
      {open && (
        <div className={styles.notificationBox}>
          <ul className={styles.list}>
            {notifications.map((notification) => (
              <li key={notification.id}>{notification.msg}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notification;
