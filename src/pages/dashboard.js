import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import BarChart from '../components/bar-chart/bar-chart.component';
import Carousel from '../components/carousel/carousel.component';
import Table from '../components/table/table.component';
import Pagination from '../components/pagination/pagination.component';
import Cards from '../components/cards/cards.component';

const Dashboard = () => {
    return <div className='dashboard'>
        <Sidebar />
        <div className='right'>
            <Cards />
            <div className='mid-page'>
                <BarChart />
                <Carousel />
            </div>
            <Table />
            <Pagination />
        </div>
    </div>
}

export default Dashboard;