import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, handleClick}) {

  const myStockItems = stocks.map((stock) => (
    <Stock
      key={stock.id}
      stock={stock}
      handleClick={handleClick}
      


    />
))

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myStockItems
      }
    </div>
  );
}

export default PortfolioContainer;
