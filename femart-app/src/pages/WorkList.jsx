import React from 'react'
import "./WorkList.css";
import WorkCard from "../components/WorkCard";
import { useEffect, useState } from "react";
import axios from "axios";
import AddWorkDialog from "../components/AddWorkDialog";

const WorkList = () => {

  const [works, setWorks] = useState([]);
  const [locale, setLocale] = useState("en");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchNews() {
        const data = await axios.get(
            "http://localhost:1337/api/newsposts?_locale=" + locale
        );
        setWorks([...data?.data]);
    }
    fetchNews();
}, [locale]);

const setLang = () => {
  setLocale(window.locales.value);
}

const showAddWorkDialog = () => {
  setShowModal(!showModal);
}

  return (
    <div className="newslist">
                <div className="newslistbreadcrumb">
                    <div className="newslisttitle">
                        <h3>art works</h3>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ marginRight: "4px" }}>
                            <button onClick={showAddWorkDialog}>Add News</button>
                        </div>
                        <div>
                            <select name="locales" id="locales" onChange={setLang}>
                                <option value="en">English</option>
                                <option value="de-DE">Deutsch</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    {works?.map((item, i) => (
                        <WorkCard item={item} key={i} />
                    ))}
                </div>
                {showModal ? <AddWorkDialog closeModal={showAddWorkDialog} /> : null}
            </div>
  )
}

export default WorkList