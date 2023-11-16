import React from 'react'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.css"
const Search = ({search,setSearch,setDropDown}) => {
  return (
    <div>
      <div className="search-section">
        <div className="search-box">
          <SearchRoundedIcon />
          <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="Search" />
        </div>
        <div>
          <select onChange={(e)=>setDropDown(e.target.value)}  className="select">
            <option value="">Trigger reason</option>
            <option value="IP Change">IP Change</option>
            <option value="FIFO">FIFO</option>
          </select>
        </div>
        <div>
          <select onChange={(e)=>setDropDown(e.target.value)} className="select">
            <option value="">Risk level</option>
            <option value="High">Hign</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Search
