import React from "react";
import "./Cards.css";
import Card from "../card/Card";

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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
