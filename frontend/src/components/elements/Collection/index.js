/* eslint-disable react/prop-types */
import Card from "../Card";
import styles from "./styles.module.scss";
import Image from "next/image";
import mypic from "./collectionsbg.jpg";

const Collection = ({ title }) => (
  <Card variant={["image"]}>
    <div className={styles.content}>{title}</div>
    <div className={styles.backdrop} />
    <div className={styles.image}>
      <Image width={640} height={480} src={mypic} />
    </div>
  </Card>
);

export default Collection;
