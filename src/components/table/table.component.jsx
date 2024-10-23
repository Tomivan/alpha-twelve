import React, { useState } from 'react';
import Pagination from '../pagination/pagination.component';
import Dots from '../../assets/images/dots.svg';
import './table.component.css';

const eventsData = [
    { eventName: "Cloud Innovation Summit", date: "2024-10-15", speaker: "Jane Doe", status: "Completed" },
    { eventName: "Blockchain Revolution Conference", date: "2024-11-05", speaker: "Dr. Peter Smith", status: "In Progress" },
    { eventName: "AI in Healthcare Symposium", date: "2024-12-01", speaker: "Dr. Aisha Malik", status: "Completed" },
    { eventName: "Future of Fintech Forum", date: "2024-10-25", speaker: "John Lee", status: "Completed" },
    { eventName: "Data Analytics in Business", date: "2024-11-12", speaker: "Rachel Moore", status: "Completed" },
    { eventName: "Sustainable Energy Expo", date: "2024-09-28", speaker: "Prof. Alan Green", status: "Completed" },
    { eventName: "Web3 Interfaces Workshop", date: "2024-10-10", speaker: "Kevin Adams", status: "In Progress" },
    { eventName: "Cybersecurity for Startups", date: "2024-11-19", speaker: "Emily Zhang", status: "Completed" },
    { eventName: "Smart Cities Forum", date: "2024-10-18", speaker: "Dr. Maria Hernandez", status: "In Progress" },
    { eventName: "Tech Safari Mixer", date: "2024-09-30", speaker: "Guest Panel", status: "In Progress" },
    
  ];

  const shuffleData = (data, times = 10) => {
    for (let i = 0; i < times; i++) {
      data = data.sort(() => Math.random() - 0.5);
    }
    return data;
  };

const Table = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [events, setEvents] = useState(shuffleData([...eventsData]));
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [dateFilter, setDateFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [speakerFilter, setSpeakerFilter] = useState("");

    // Handle changing the page
    const handlePageChange = (page) => setCurrentPage(page);
    const handleRowsPerPageChange = (e) => setRowsPerPage(Number(e.target.value));

    // Filter and sort the events
    const dates = Array.from(new Set(eventsData.map(event => event.date)));
    const statuses = Array.from(new Set(eventsData.map(event => event.status)));
    const speakers = Array.from(new Set(eventsData.map(event => event.speaker)));

    const filteredEvents = events
    .filter((event) =>
      event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((event) => (dateFilter ? event.date === dateFilter : true)) // Filter by date
    .filter((event) => (statusFilter ? event.status === statusFilter : true)) // Filter by status
    .filter((event) => (speakerFilter ? event.speaker === speakerFilter : true)); // Filter by speaker


    const paginatedEvents = filteredEvents.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    // Total number of pages
    const totalPages = Math.ceil(filteredEvents.length / rowsPerPage);

    return (
        <div className="table">
            <h2 className='heading'>Events History</h2>
            <div className="top">
                <div className="left">
                    <input type='text' 
                        placeholder='Search' 
                        className='search' 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select className="select date" value={dateFilter} 
                        onChange={(e) => setDateFilter(e.target.value)}>
                        <option value="">Date</option>
                         {dates.map((date) => (
                        <option key={date} value={date}>
                        {date}
                        </option>
                        ))}
                    </select>
                    <select className="select status" value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}>
                        <option value="">Status</option>
                        {statuses.map((status) => (
                            <option key={status} value={status}>
                            {status}
                        </option>
                        ))}
                    </select>
                    <select className="select speaker" value={speakerFilter}
                        onChange={(e) => setSpeakerFilter(e.target.value)}>
                        <option value="">Speaker</option>
                        {speakers.map((speaker) => (
                            <option key={speaker} value={speaker}>
                            {speaker}
                            </option>
                        ))}
                    </select>
                    <p><strong>Displaying {rowsPerPage} results</strong></p>
                </div>
                <div className="right">
                    <p>Sort:</p>
                    <p className='select'>Most Recent</p>
                    <img src={Dots} alt="" className='select'/>
                    <p className='select'>Export</p>
                </div>
            </div>
            <table>
                <thead>
                    <tr className='row-head'>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Speaker</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedEvents.map((event, index) => (
                        <tr key={index}>
                        <td>{event.eventName}</td>
                        <td>{event.date}</td>
                        <td>{event.speaker}</td>
                        <td>{event.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="bottom">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
                <div className="show">
                    <label>Show:</label>
                    <select className="select" value={rowsPerPage} onChange={handleRowsPerPageChange}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Table;