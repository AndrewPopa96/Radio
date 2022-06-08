/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import classnames from "classnames";

import { withModifiers } from "../../helpers/withModifiers";

const Card = ({ children, variant, onClick }) => (
  <div
    onClick={onClick}
    className={classnames(withModifiers("card", variant, styles))}
  >
    {children}
  </div>
);

export default Card;
