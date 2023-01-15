import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { bucket } from "../../utils";

const HomePage = () => {
  const [username, setUsername] = useState("");
  // console.log("This is domain " + bucket);
  const [nameError, setNameError] = useState([]);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const userdata = {
      user: username,
    };
    const res = await axios
      .get(`${bucket}/api/github/userinfo/${username}`, userdata)
      .catch((err) => {
        console.log(err);
      });
    console.log(res.data.message);
    if (res.data.message === "Not Found") {
      // console.log("Error");
      setNameError("User not found");
      return;
    }
    const { name, bio, avatar_url, html_url, blog } = res.data;
    const repores = await axios
      .get(`${bucket}/api/github/userinfo/${username}/repos`, userdata)
      .catch((err) => {
        console.log(err);
      });

    const arr = repores.data;
    const state = { name, bio, avatar_url, html_url, blog, arr };
    navigate("/landing", { state });
  };
  return (
    <div className="home">
      <h1>Get Github repository info here</h1>
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        className="gihub-input"
        type="text"
        placeholder="Enter your Github Username"
      />
      {nameError !== "" && <div className="nameerr">{nameError}</div>}
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default HomePage;
