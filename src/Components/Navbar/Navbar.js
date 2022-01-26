import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import styles from './Navbar.module.css' 

const Navbar = (props) => {
  return (
    <Router>
      <div className={styles.ul} >
        <NavbarLinks links={props.links} />
      </div>
    </Router>
  );
};

export default Navbar;
