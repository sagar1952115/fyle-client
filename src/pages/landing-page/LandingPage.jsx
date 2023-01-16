import React from "react";
import { BiLink } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import "./LandingPage.css";

const LandingPage = () => {
  const locate = useLocation();
  const { avatar_url, name, bio, location, blog, html_url, arr } = locate.state;
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
        <BiLink className="icons" />
        <a rel="noreferrer" target="_blank" href={html_url}>
          {html_url}
        </a>
      </div>

      <Cards arr={arr} />
    </div>
  );
};

export default LandingPage;
