import Pagination from "@mui/material/Pagination";
import Styles from "./pageNumber.module.css";
import MediaQuery from "react-responsive";

const PageNumber = (props) => {
  const { setPage, pageNumber, numberOfPages } = props;
  const changePage = (event, value) => {
    window.scroll(0, 0);
    setPage(value);
  };
  return (
    <>
      <div className={Styles.pageNumber}>
        <div style={{ color: "white" }}></div>
        <MediaQuery maxWidth={500}>
          <Pagination
            size="small"
            page={pageNumber}
            count={numberOfPages}
            color="primary"
            sx={{ background: "white", borderRadius: "50px" }}
            onChange={changePage}
          />
        </MediaQuery>
        <MediaQuery minWidth={501}>
          <Pagination
            page={pageNumber}
            count={numberOfPages}
            color="primary"
            sx={{ background: "white", borderRadius: "50px" }}
            onChange={changePage}
          />
        </MediaQuery>
      </div>
    </>
  );
};

export default PageNumber;
