import styles from "./Categories.module.css";
import { beverages } from "../beverages";
import { useState } from "react";

const Categories = () => {
  const [modelData, setModelData] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [notification, setNotification] = useState(null);

  function handleOpenModel(beverage) {
    setModelData(beverage);
    setOpenModel(true);
  }

  console.log(notification);

  function handleCloseModel() {
    setModelData(null);
    setOpenModel(false);
    setNotification(null);
  }

  return (
    <div className={styles.container}>
      {beverages.map((beverage, index) => (
        <div
          key={index}
          className={styles.item}
          style={{ pointerEvents: openModel && "none" }}
          onClick={() => handleOpenModel(beverage)}
        >
          <p className={styles.short}>{Object.keys(beverage)[0]}</p>
          <p className={styles.long}>{Object.entries(beverage)[0][1]}</p>
        </div>
      ))}
      {openModel && (
        <div className={styles.modelContainer}>
          <button className={styles.button} onClick={() => handleCloseModel()}>
            close
          </button>
          <div className={styles.formdata}>
            <p>
              <span>Set Notification for </span>
              <span className={styles.data}>
                {Object.keys(modelData)[0]} :{Object.entries(modelData)[0][1]}
              </span>
            </p>
            <form className={styles.form} on>
              <div className={styles.formDiv}>
                <label htmlFor="msg">Message</label>
                <textarea
                  onChange={(e) =>
                    setNotification({
                      id: Object.keys(modelData)[0],
                      notification: e.target.value,
                    })
                  }
                  name="msg"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button className={styles.submit} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
