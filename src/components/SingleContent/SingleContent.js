import Badge from "@mui/material/Badge";
import axios from "axios";
import { useEffect, useState } from "react";
import { img_300, unavailable } from "../../config/config";
import ContentDialog from "../ContentDialog/ContentDialog";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import Styles from "./SingleContent.module.css";

const SingleContent = (props) => {
  const { id, poster, title, date, media_type, vote_average } = props;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isYoutubeDialogOpen, setIsYoutubeDialogOpen] = useState(false);
  const [youtubeURL, setYoutubeURL] = useState("");

  const ClickOpenDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const handleYoutubeCloseDialog = () => {
    setIsYoutubeDialogOpen(false);
  };
  const openYoutubeVideo = () => {
    setIsDialogOpen(false);
    setIsYoutubeDialogOpen(true);
    // console.log(youtubeURL);
  };

  useEffect(() => {
    const fetchContentVideo = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setYoutubeURL(data.results[0]?.key);
    };

    fetchContentVideo();
  }, [media_type, id]);
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
      {isYoutubeDialogOpen && (
        <YoutubeVideo
          open={isYoutubeDialogOpen}
          handleClose={handleYoutubeCloseDialog}
          youtubeURL={youtubeURL}
        />
      )}
    </>
  );
};

export default SingleContent;
