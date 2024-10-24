import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import BarChart from '../components/bar-chart/bar-chart.component';
import Table from '../components/table/table.component';
import Pagination from '../components/pagination/pagination.component';
import Cards from '../components/cards/cards.component';
import CarouselComponent from '../components/carousel/carousel.component';

const Dashboard = () => {
    return <div className='dashboard'>
        <Sidebar />
        <div className='body-right'>
            <Cards />
            <div className='mid-page'>
                <BarChart />
                <CarouselComponent />
            </div>
            <Table />
        </div>
    </div>
}

export default Dashboard;