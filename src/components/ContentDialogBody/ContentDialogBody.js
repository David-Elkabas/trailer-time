import { img_500, unavailableLandscape } from "../../config/config";
import Style from "./ContentDialogBody.module.css";

const ContentDialogBody = (props) => {
  const { tagline, poster, contentName, description } = props;
  return (
    <div>
      <div className={Style.tagline}>{tagline && <i>{tagline}</i>}</div>
      <div>
        <img
          className={Style.poster_image}
          src={poster ? `${img_500}/${poster}` : unavailableLandscape}
          alt={contentName}
        />
        <div className={Style.description}>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentDialogBody;
