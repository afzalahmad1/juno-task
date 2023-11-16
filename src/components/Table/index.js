import React from 'react'
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { blue } from "@mui/material/colors";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import "./styles.css"
const Table = ({users,border}) => {
  return (
    <div>
      <div className="table-section">
        <table id="users">
          <thead>
            <tr>
              <th>User</th>
              <th>Risk level</th>
              <th>Trigger reason</th>
              <th>In queue for</th>
              <th>Data added on</th>
              <th>previously revirwed</th>
            </tr>
          </thead>
          <tbody>
            {border === 1 ? users.map((user,idx) => {
              return (
                user.status === "Pending" && 

                <tr key={idx}>
                  <td>
                    <div className="td-flex">
                      <div>
                        <div style={{ fontWeight: "600" }}>{user.name} </div>{" "}
                        <br />
                        <div style={{ fontWeight: "400", color: "gray" }}>
                          {user.email}
                        </div>
                      </div>
                      <LaunchRoundedIcon
                        sx={{ color: blue[700] }}
                        fontSize="small"
                      />
                    </div>
                  </td>
                  <td>
                    <div  className={ user.riskLevel === "High"? "color-red": user.riskLevel === "Low"? "color-green": "color-yellow"}>
                      <div className="td-risk">
                      <div>
                        <FiberManualRecordRoundedIcon fontSize="small" />
                      </div>
                      <div>{user.riskLevel}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.triggerReason}</td>
                  <td>{user.inQueue}</td>
                  <td>{user.dateAddedOn}</td>
                  <td>
                    <div style={{ fontWeight: "600" }}>
                      {user.previouslyReviewed}{" "}
                    </div>{" "}
                    <br />
                    <div style={{ fontWeight: "400", color: "gray" }}>
                      {user.reviewedDate}
                    </div>
                  </td>
                </tr>
              );
            })
            :
            users.map((user,idx)=>{
                return(
                    user.status === "Completed" && 

                <tr key={idx}>
                  <td>
                    <div className="td-flex">
                      <div>
                        <div style={{ fontWeight: "600" }}>{user.name} </div>{" "}
                        <br />
                        <div style={{ fontWeight: "400", color: "gray" }}>
                          {user.email}
                        </div>
                      </div>
                      <LaunchRoundedIcon
                        sx={{ color: blue[700] }}
                        fontSize="small"
                      />
                    </div>
                  </td>
                  <td>
                    <div  className={ user.riskLevel === "High"? "color-red": user.riskLevel === "Low"? "color-green": "color-yellow"}>
                      <div className="td-risk">
                      <div>
                        <FiberManualRecordRoundedIcon fontSize="small" />
                      </div>
                      <div>{user.riskLevel}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.triggerReason}</td>
                  <td>{user.inQueue}</td>
                  <td>{user.dateAddedOn}</td>
                  <td>
                    <div style={{ fontWeight: "600" }}>
                      {user.previouslyReviewed}{" "}
                    </div>{" "}
                    <br />
                    <div style={{ fontWeight: "400", color: "gray" }}>
                      {user.reviewedDate}
                    </div>
                  </td>
                </tr>
                )
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
