import React from "react";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import "./styles.css"
const Status = ({setBorder,border,setModal,modal}) => {
  return (
    <div>
      <div className="heading">Monitoring</div>
      <div className="status-container">
        <div className="status">
          <div
            className={border === 1 ? "show-border" : "not-show-border"}
            onClick={() => setBorder(1)}
          >
            Pending
          </div>
          <div
            className={border === 2 ? "show-border" : "not-show-border"}
            onClick={() => setBorder(2)}
          >
            Completed
          </div>
        </div>
        <div className="close-section" onClick={()=> setModal(!modal)}>
          <HighlightOffRoundedIcon />
          <div  className="close">Close account</div>
        </div>
      </div>
    </div>
  );
};

export default Status;
