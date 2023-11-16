import React, { useState } from "react";
import "./styles.css";
import Sidebar from "../components/Sidebar";
import Status from "../components/Status";
import Search from "../components/Search";
import Table from "../components/Table";
import users from "../records.json"
import Modal from "../components/Modal";
const Dashboard = () => {
  const [border, setBorder] = useState(1);
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState("");
  const [modal, setModal] = useState(false);

  var filterSearch = users.filter((val)=>{
    return val.name.toLowerCase().includes(search.toLowerCase())
  })
  var filterDrop = users.filter((val)=>{
    return val.triggerReason === dropDown || val.riskLevel === dropDown
  })
  return (
    <div>
      {modal && <Modal modal={modal} setModal={setModal} users={users}/>}
      <div className="main-container">
        <Sidebar />
        <div className="right-container">
          {/* <Main /> */}
          <Status setBorder={setBorder} border={border} setModal = {setModal} model={modal}/>
          <Search search={search} setSearch={setSearch} setDropDown={setDropDown} />
          <Table users={search?filterSearch:dropDown?filterDrop:users} border={border}/>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
