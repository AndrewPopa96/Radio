/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";

const Card = ({ children, onClick }) => (
  <div onClick={onClick} className={styles.card}>
    {children}
  </div>
);

export default Card;
