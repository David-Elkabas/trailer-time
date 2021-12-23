import Pagination from "@mui/material/Pagination";
import Styles from "./pageNumber.module.css";

const PageNumber = (props) => {
  const { setPage } = props;
  const changePage = (event, value) => {
    window.scroll(0, 0);
    setPage(value);
  };
  return (
    <div className={Styles.pageNumber}>
      <Pagination count={10} color="primary" onChange={changePage} />
    </div>
  );
};

export default PageNumber;
