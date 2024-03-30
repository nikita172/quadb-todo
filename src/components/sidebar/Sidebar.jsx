import React from 'react'
import "./sidebar.css"
import calendar from "../../assets/calendar.svg"
import bell from "../../assets/bell.svg"
import heart from "../../assets/heart.svg"
import lock from "../../assets/lock.svg"
import settings from "../../assets/settings.svg"
import trash from "../../assets/trash.svg"
const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
      <div className="sidebarWrapper">
        <div>
          <h3 className='noteHeading'>NOTE</h3>
          <div className="sidebars">
            <div className="sidebar">
              <img className="sidebarIcon" src={calendar} />
              <span className='menuTitle'>All notes</span>
            </div>
            <div className="sidebar">
              <img className="sidebarIcon" src={bell} />
              <span className='menuTitle'>Reminders</span>
            </div>
            <div className="sidebar">
              <img className="sidebarIcon" src={heart} />
              <span className='menuTitle'>Favorites</span>
            </div>
            <div className="sidebar">
              <img className="sidebarIcon" src={lock} />
              <span className='menuTitle'>Security</span>
            </div>
            <div className="sidebar">
              <img className="sidebarIcon" src={trash} />
              <span className='menuTitle'>Trash</span>
            </div>
            <div className="sidebar">
              <img className="sidebarIcon" src={settings} />
              <span className='menuTitle'>Settings</span>
            </div>
          </div>
        </div>
        <div className='aboutusTitle'>About us</div>
      </div>
    </div>
  )
}

export default Sidebar