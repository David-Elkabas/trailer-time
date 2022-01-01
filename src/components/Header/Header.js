import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={Styles.header}>
      <img
        src={process.env.PUBLIC_URL + "/movie-image-no-background.png"}
        alt="movieImage"
        className={Styles.movieImage}
      />
      <span className={Styles.title} onClick={() => window.scroll(0, 0)}>
        Trailer-Time
      </span>
    </div>
  );
};

export default Header;
