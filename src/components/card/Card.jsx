import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";
const Card = ({ name, desc, language, username }) => {
  console.log(username);
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    const request = {
      user: username,
      reponame: name,
    };

    const fetchLang = async () => {
      const res = await axios
        .get(
          `https://github-rest-server.onrender.com/api/github/repoinfo/${username}/${name}`,
          request
        )
        .catch((err) => {
          console.log(err);
        });
      console.log(res);

      const lang = Object.keys(res.data);
      setTopic(lang);
      console.log(topic);
    };
    fetchLang();
  });

  return (
    <>
      <div className="card-body">
        <div className="card-heading">{name}</div>
        <div className="card-desc">{desc}</div>
        <div className="card-topic-body">
          {language &&
            topic.map((curr) => {
              return <div className="card-topics">{curr}</div>;
            })}
        </div>
      </div>
    </>
  );
};

export default Card;
