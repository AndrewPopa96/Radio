/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";

import classNames from "classnames";
import { withModifiers } from "../../helpers/withModifiers";

const Grid = ({ children, variant }) => (
  <div className={classNames(withModifiers("grid", variant, styles))}>
    {children}
  </div>
);

export default Grid;
