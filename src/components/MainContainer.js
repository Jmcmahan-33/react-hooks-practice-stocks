import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


const stockUrl = `http://localhost:3001/stocks`

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [sortBy, setSortBy] = useState("")

  useEffect(() => {
    fetch(stockUrl)
      .then(response => response.json())
      .then(stocksData => setStocks(stocksData))
  }, [])

  function buyStock(stock) {
    if (!myStocks.includes(stock)) {
      const updatedMyStocks = [...myStocks, stock]

      setMyStocks(updatedMyStocks)
    }
  }

  function sellStock(stock){
    console.log("stock sold")
    const updatedMyStocks = [...myStocks].filter(myStock => myStock.id !== stock.id)
    setMyStocks(updatedMyStocks)
  }

  function sortStocks(e) {
    setSortBy(e.target.value)
  }


  return (
    <div>
      <SearchBar  sortStocks={sortStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleClick={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={myStocks} handleClick={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
