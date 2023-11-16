import React from 'react'
import elon from '../assets/elon_musk.webp'
import "./styles.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
          <div className="upper-sidebar">
            <div className="logo">
                LOGO HERE
            </div>
            <div className="sidebar-content">
                <div className='side-items'>Overview</div>
                <div className='side-items'>Onboarding</div>
                <div className='side-items'>Monitoring</div>
                <div className='side-items'>Flagging</div>
                <div className='side-items'>Source of income</div>
                <div className='side-items'>UAR</div>
            </div>
          </div>

          <div className="lower-sidebar">
            <img src={elon} alt="elon" />
            <div>
                <div id='name'>Elon Musk</div>
                <div id='email'>elon@twitter.com</div>
            </div>
          </div>
     </div>
  )
}

export default Sidebar
