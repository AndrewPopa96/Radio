/* eslint-disable react/prop-types */

import Container from "../../elements/Container";
import Card from "../../elements/Card";
import Header from "../../elements/Header";

import styles from "./styles.module.scss";

const Main = ({ children, container, title }) => (
  <main className={styles.main}>
    {/* Header */}
    <Header />

    {/* Content */}

    {/* Footer */}
    <Container variant={container}>
      <Card>
        <h1 className={styles.title}>{title}</h1>
        <div>{children}</div>
      </Card>
    </Container>
  </main>
);

export default Main;
