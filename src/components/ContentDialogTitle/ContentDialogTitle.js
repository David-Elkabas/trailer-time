import Style from "./ContentDialogTitle.module.css";
const DialogTitleComp = (props) => {
  const { contentName, date, vote_average } = props;
  return (
    <div>
      <div className={Style.dialog_title}>
        <div>
          <span>{contentName} </span>
          <span>({date})</span>
        </div>
        <div>
          <span
            className={` ${Style.vote_average} 
                  ${
                    vote_average > 7.5
                      ? Style.good_vote_average
                      : Style.just_vote_average
                  }`}
          >
            {vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DialogTitleComp;
