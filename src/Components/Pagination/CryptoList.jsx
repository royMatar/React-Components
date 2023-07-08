import React, { useState, useEffect } from 'react';

const itemsPerPage = 10; // Number of items to display per page

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
      const data = await response.json();
      setCryptoData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cryptoData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render pagination buttons
  const renderPaginationButtons = () => {
    const pageNumbers = Math.ceil(cryptoData.length / itemsPerPage);

    return (
      <ul className="pagination">
        {Array.from({ length: pageNumbers }).map((_, index) => (
          <button
            key={index}
            className={`pagination-item ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <ul>
        {currentItems.map((crypto, index) => (
          <li key={index}>
            <img src={crypto.image} alt={crypto.name} />
            <span>{crypto.name}</span>
            <span>${crypto.current_price}</span>
          </li>
        ))}
      </ul>
      {renderPaginationButtons()}
    </div>
  );
};

export default CryptoList;
