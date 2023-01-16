import axios from "axios";
import React, { useEffect, useState } from "react";
import { bucket } from "../../utils";
import "./Card.css";

const Card = ({ name, desc, language, username, repo_url }) => {
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
    const lang = Object.keys(res.data);
    setTopic(lang);
  };
  return (
    <>
      <div className="card-body">
        <div className="card-heading">
          <a href={repo_url} rel="noreferrer" target="_blank">
            {name}
          </a>
        </div>
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
