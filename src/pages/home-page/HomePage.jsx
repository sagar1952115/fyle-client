import axios from "axios";
import React, { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { bucket } from "../../utils";
import "./HomePage.css";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [nameError, setNameError] = useState([]);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (username === "") {
      setNameError("Username can not be empty.");
      return;
    }
    setIsloading(true);
    const userdata = {
      user: username,
    };
    const res = await axios
      .get(`${bucket}/api/github/userinfo/${username}`, userdata)
      .catch((err) => {
        setIsloading(false);
        console.log(err);
      });

    if (res.data.message === "Not Found") {
      setNameError("User not found");
      setIsloading(false);
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
    setIsloading(false);
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
      {!isLoading && <button onClick={handleClick}>Submit</button>}
      {isLoading && (
        <button disabled>
          <ImSpinner2 className="icon-spinner" />
        </button>
      )}
    </div>
  );
};

export default HomePage;
