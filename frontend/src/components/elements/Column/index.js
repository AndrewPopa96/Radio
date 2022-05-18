import styles from "./styles.module.scss";

const Column = ({ children }) => (
  <div className={styles.column}>{children}</div>
);

export default Column;
