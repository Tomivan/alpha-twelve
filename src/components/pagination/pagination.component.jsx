import React from 'react';
import './pagination.component.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  
    return (
      <div className="page-number">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
                Previous
              </button>
            </li>
  
            {/* Render page numbers */}
            {pages.map((page) => (
              <li
                key={page}
                className={`page-item ${page === currentPage ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => onPageChange(page)}>
                  {page}
                </button>
              </li>
            ))}
  
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Pagination;