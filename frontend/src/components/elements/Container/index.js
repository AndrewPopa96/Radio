/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import classnames from "classnames";

import { withModifiers } from "../../helpers/withModifiers";

const Container = ({ children, variant }) => (
  <div className={classnames(withModifiers("container", variant, styles))}>
    {children}
  </div>
);

export default Container;
