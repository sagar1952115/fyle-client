import React from "react";
import "./LandingPage.css";
import { useLocation } from "react-router-dom";
import Cards from "../../components/cards/Cards";
const LandingPage = () => {
  const locate = useLocation();
  const { avatar_url, name, bio, location, blog, html_url, arr } = locate.state;
  console.log(arr);
  return (
    <div>
      <div className="profile">
        <div className="profile-img">
          <img src={avatar_url} alt="" />
        </div>
        <div className="profile-desc">
          <h1 className="profile-desc-name">{name}</h1>
          <p className="profile-desc-bio">{bio}</p>
          <p className="profile-desc-location">{location}</p>
          <p className="profile-desc-handles">{blog}</p>
        </div>
      </div>
      <div className="profile-link">
        <a href={html_url}>{html_url}</a>
      </div>

      <Cards arr={arr} />
    </div>
  );
};

export default LandingPage;
