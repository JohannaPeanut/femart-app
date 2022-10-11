import React from 'react'
import "./WorkView.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const WorkView = () => {
  let { id } = useParams();
        const [works, setWorks] = useState();
    
        useEffect(() => {
            async function getWorks() {
                const data = await axios.get("http://localhost:1337/api/newsposts/" + id);
                setWorks(data?.data);
            }
            getWorks();
        }, [id]);
    
        async function deleteWorks() {
            if (window.confirm("Do you want to delete this art work?")) {
                await axios.delete("http://localhost:1337/api/newsposts/" + id);
                window.history.pushState(null, "", "/news");
                window.location.reload();
            }
        }
  return (
    <div className="newsview">
    <div
        className="newsviewimg"
        style={{ backgroundImage: `url(${works?.imageUrl})` }}
    ></div>
    <div>
        <div className="newsviewtitlesection">
            <div className="newsviewtitle">
                <h1>{works?.title}</h1>
            </div>
            <div className="newsviewdetails">
                <span style={{ flex: "1", color: "rgb(99 98 98)" }}>
                    Written By: <span>{works?.writtenBy}</span>
                </span>
                <span style={{ flex: "1", color: "rgb(99 98 98)" }}>
                    Date: <span>{works?.created_at}</span>
                </span>
                <span>
                    <button className="btn-danger" onClick={deleteWorks}>
                        Delete
                    </button>
                </span>
            </div>
        </div>
        <div className="newsviewbody">{works?.body}</div>
    </div>
</div>
  )
}

export default WorkView