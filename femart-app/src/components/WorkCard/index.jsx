import React from 'react'
import { Link } from "react-router-dom";
import "./WorkCard.css";

const WorkCard = ({ workItem }) => {
    const { title, body, imageUrl, id } = workItem;
    const synopsis = body.slice(0, 150);
  return (
    <Link to={"/workview/" + id}>
          <div className="newscard">
            <div
              className="newscardimg"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div>
              <div className="newscardtitle">
                <h1>{title}</h1>
              </div>
              <div>
                <span>{synopsis}</span>
              </div>
              <div></div>
            </div>
          </div>
        </Link>
  )
}

export default WorkCard