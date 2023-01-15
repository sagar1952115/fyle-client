import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";
import { bucket } from "../../utils";
const Card = ({ name, desc, language, username }) => {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    fetchLang();
    // eslint-disable-next-line
  }, [username]);
  const request = {
    user: username,
    reponame: name,
  };

  const fetchLang = async () => {
    const res = await axios
      .get(`${bucket}/api/github/repoinfo/${username}/${name}`, request)
      .catch((err) => {
        console.log(err);
      });
    console.log(res);

    const lang = Object.keys(res.data);
    setTopic(lang);
  };
  return (
    <>
      <div className="card-body">
        <div className="card-heading">{name}</div>
        <div className="card-desc">{desc}</div>
        <div className="card-topic-body">
          {language &&
            topic.map((curr, i) => {
              return (
                <div key={i} className="card-topics">
                  {curr}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Card;
