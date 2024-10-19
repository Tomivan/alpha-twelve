import React from 'react';
import './table.component.css';

const Table = () => {
    <div className="table">
        <div className="top">
            <h2>Events History</h2>
            <div className="left">
                <input type='search' placeholder='Search' />
                <p>Date</p>
                <p>Status</p>
                <p>Name</p>
                <p><strong>Displaying 100 results</strong></p>
            </div>
            <div className="right">
                <p>Sort:</p>
                <p>Most Recent</p>
                <p></p>
                <p>Export</p>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Event Name</th>
                    <th>Date</th>
                    <th>Speaker</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Table;