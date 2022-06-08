import styles from "./styles.module.scss";
import Link from "next/link";

import { FiUser, FiChevronRight } from "react-icons/fi";

import Container from "../Container";
import Dropdown from "../Dropdown";

const Header = () => (
  <Container variant={["xs"]}>
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>

        <Link href="/collections">
          <a className={styles.link}>Collections</a>
        </Link>

        <Link href="/explore">
          <a className={styles.link}>Explore</a>
        </Link>

        <div className={styles.profile}>
          <Dropdown
            trigger={
              <div className={styles.icon}>
                <FiUser />
              </div>
            }
          >
            <div className={styles.content}>
              <Link href="/login">
                <a className={styles.navLink}>
                  Login <FiChevronRight />
                </a>
              </Link>

              <Link href="/register">
                <a className={styles.navLink}>
                  Register <FiChevronRight />
                </a>
              </Link>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  </Container>
);

export default Header;
