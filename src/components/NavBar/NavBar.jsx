import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { onSearch } = props;

  return (
    <div className={styles.NavBarId}>
      <div className={styles.wrapperLink}>
        <Link to={"/home"} className={styles.HomeNavBar}>
          Home
        </Link>
        <Link to={"/about"} className={styles.AboutNavBar}>
          About
        </Link>
        <Link to={"/favorites"} className={styles.FavNavBar}>
          Favorites
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
