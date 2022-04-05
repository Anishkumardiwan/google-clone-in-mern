import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
    return (
        <div className='home'>
            {/* Home Header */}
            <div className="home_header">

                <div className="home_header_left">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>

                <div className="home_header_right">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Image</Link>
                    <AppsIcon />
                    <AccountCircleIcon />
                </div>

            </div>
            {/* End */}

            {/* Home Body */}
            <div className="home_body">
                <img src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    alt="" />

                {/* Search Component */}
                <div className="home_input_container">
                    <SearchBar />
                </div>
            </div>
            {/* End */}

        </div>
    )
}

export default Home;