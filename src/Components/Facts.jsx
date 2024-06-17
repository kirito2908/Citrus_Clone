import React from "react";
import FactsIcon from "./BodyComponents/FactsIcon";

const Facts = () => {
  return (
    <>
      <div className="factsContainer">
        <div className="factsContent">
          <h1>
            some fun facts about <span>citrus</span>
          </h1>
          <p>
            Each completed project makes us even more hungry, hungry for more
            designs, more code and at least some more twinkies. As a result we
            deliver a better web experience.
          </p>
          <div className="factsIcons">
            <FactsIcon icon="assets/team.avif" name="Marketplace Items" />
            <FactsIcon icon="assets/book.avif" name="Talented Employees" />
            <FactsIcon icon="assets/jet.avif" name="Items Sold" />
            <FactsIcon icon="assets/twit.avif" name="Happy Clients" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Facts;
