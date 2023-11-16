import React from "react";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import "./styles.css";

const Modal = ({ modal, setModal, users }) => {
  const handleModalContent = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="modal" onClick={() => setModal(!modal)}>
      <form onClick={handleModalContent} className="modal-content">
        <div className="close-flex">
          <h3>Close account</h3>
          <div onClick={()=> setModal(!modal)}><HighlightOffRoundedIcon /></div>
        </div>
        <div className="dropdown-modal">
          <div>Email</div>
          <div>
            <select name="" id="">
              {users.map((user, idx) => {
                return (
                  <option key={idx} value={user.email}>
                    {user.email}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="modal-radio">
          <span>Want to file UAR</span>
          <div>
            <input type="radio" name="uar" id="yes" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div>
            <input type="radio" name="uar" id="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div className="dropdown-modal">
          <div>Reason</div>
          <div>
            <select name="" id="">
              <option value="">Flaggig logics triggered</option>
              <option value="">Flaggig logics triggered11</option>
              <option value="">Flaggig logics triggered22</option>
            </select>
          </div>
        </div>
        <div className="dropdown-modal" style={{margin:"1rem 0rem"}}>
          <div>Note</div>
          <div>
            <textarea name="" id="" cols="42" rows="3"></textarea>
          </div>
        </div>
        <div className="modal-footer">
            <div className="closure">
            <div><input type="radio" id="charge" /></div>
                <label htmlFor="charge">Charge closure fee</label>
            </div>
            <div className="account-btn">
                Close Account
            </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
