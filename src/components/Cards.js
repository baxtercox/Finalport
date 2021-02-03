import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-budget.jpg"
              text="Budget Tracker App!"
              label="Budget Tracker!"
              pathname="https://budge-appbc.herokuapp.com/"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Connect with local bandmembers that share similar interest!"
              label="BandMates!"
              path="/Projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/gitjob.jpg"
              text="Job application for Software Developers"
              label="GitJobs"
              path="/Projects"
            />
            <CardItem
              src="images/Weather.jpg"
              text="Weather application and search bar!"
              label="Weather App"
              path="/Projects"
            />
            <CardItem
              src="images/react.jpg"
              text="React User Directory"
              label="react app!"
              path="/Projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
