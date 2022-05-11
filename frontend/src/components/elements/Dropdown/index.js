/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { withModifiers } from "../../helpers/withModifiers";

const Dropdown = ({ children, trigger }) => {
  const [opened, setOpened] = useState(false);
  const toggle = () => setOpened(!opened);

  return (
    <div className={styles.dropdown}>
      <div onClick={toggle}>{trigger}</div>
      <div
        className={classNames(
          withModifiers("content", opened && ["opened"], styles)
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
