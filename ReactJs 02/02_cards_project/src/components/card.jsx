import React from 'react'

function Card(props) {
  return (
    <div className="job-card">
        <div className="top">
          <div className="logo">
            <img
              src={props.logo}
              alt={props.companyName}
            />
          </div>
          <button className="save-btn">Save</button>
        </div>

        <div className="content">
          <p className="company">{props.companyName} • {props.timeAgo}</p>
          <h2 className="title">{props.role}</h2>
          <p className="meta">{props.tag1} • {props.tag2}</p>
        </div>

        <div className="bottom">
          <div>
            <p className="salary">{props.salary}</p>
            <p className="location">{props.location}</p>
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
  )
}

export default Card
