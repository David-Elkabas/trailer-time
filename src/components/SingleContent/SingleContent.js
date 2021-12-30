import Badge from "@mui/material/Badge";
import { useState } from "react";
import { img_300, unavailable } from "../../config/config";
import ContentDialog from "../ContentDialog/ContentDialog";
import Styles from "./SingleContent.module.css";

const SingleContent = (props) => {
  const { id, poster, title, date, media_type, vote_average } = props;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const ClickOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const openYoutubeVideo = () => {
    setIsDialogOpen(false);
    console.log("open fucking youtube");
  };
  return (
    <>
      <div className={Styles.post} onClick={() => ClickOpenDialog()}>
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
      <ContentDialog
        open={isDialogOpen}
        handleClose={handleCloseDialog}
        id={id}
        media_type={media_type}
        openYoutubeVideo={openYoutubeVideo}
      />
    </>
  );
};

export default SingleContent;
