import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.sass";
const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <h1>Blog</h1>
      </Link>
      <ul className={styles.ul}>
        <li>
          <Link href={"/posts"}>
            <h2>All Posts</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
