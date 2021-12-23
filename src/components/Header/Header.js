import Styles from "./Header.module.css";

const Header = () => {
  return (
    <span className={Styles.header} onClick={() => window.scroll(0, 0)}>
      Trailer-Time
    </span>
  );
};

export default Header;
