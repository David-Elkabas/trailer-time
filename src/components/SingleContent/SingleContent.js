import Badge from "@mui/material/Badge";
import { img_300, unavailable } from "../../config/config";
import Styles from "./SingleContent.module.css";

const SingleContent = (props) => {
  const { id, poster, title, date, media_type, vote_average } = props;

  return (
    <div className={Styles.post}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 7.5 ? "primary" : "warning"}
      ></Badge>
      <img
        className={Styles.image}
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className={Styles.title}>{title}</b>
      <span className={Styles.typeAndDate}>
        {media_type === "tv" ? "TV Series" : "movie"}
        <span className={Styles.typeAndDate}>{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
