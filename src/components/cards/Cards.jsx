import React from "react";
import Card from "../card/Card";
import "./Cards.css";

const Cards = ({ arr }) => {
  return (
    <div>
      <div className="cards-body">
        {arr.map((curr) => {
          return (
            <Card
              username={curr.owner.login}
              key={curr.id}
              name={curr.name}
              desc={curr.description}
              language={curr.language}
              repo_url={curr.html_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
