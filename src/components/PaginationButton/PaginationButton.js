import React from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './PaginationButton.css';

const PaginationButton = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const term = searchParams.get('term');
    const page = searchParams.get('start');
    const startIndex = Number(page) || 0;
    return (
        <div className='pagination_div'>
            {
                startIndex >= 10 && (
                    <Link to={`/search?term=${term}&start=${startIndex - 10}`}>
                        <div className='previous_btn'>
                            <ArrowLeftIcon />
                            <p>Previous</p>
                        </div>
                    </Link>
                )
            }

            <Link to={`/search?term=${term}&start=${startIndex + 10}`}>
                <div className='next_btn'>
                    <ArrowRightIcon />
                    <p>Next</p>
                </div>
            </Link>
        </div>
    )
}

export default PaginationButton;