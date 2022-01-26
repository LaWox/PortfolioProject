import React from "react";
import { Link } from "react-router-dom";
import styles from './NavbarLinks.module.css'
const NavbarLinks = (props) => {
  const links = props.links;
  return (
    <div>
      <ul>
        {links.map((link) => (
          <li className={styles.a}>
            <Link to={link.url}> {link.name} </Link>
          </li>
        ))}

      </ul>
    </div>
  );
};
export default NavbarLinks;
