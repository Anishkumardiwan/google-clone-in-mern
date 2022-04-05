import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useThisState } from '../../ContextApi/StateProvider';
import { actionType } from '../../ContextApi/reducer';

const SearchBar = ({ hideButtons = false }) => {

    const [{ }, dispatch] = useThisState();
    const [Input, setInput] = useState('');
    const navigate = useNavigate();

    const search = e => {
        e.preventDefault();
        console.log(Input);

        dispatch({
            type: actionType.SET_SEARCH_TERM,
            term: Input,
        })

        navigate('/search');
    }

    return (
        <form className='search'>
            <div className="search_input">
                <SearchIcon className='search_input_icon' />
                <input value={Input} onChange={e => setInput(e.target.value)} type="text" />
                <MicIcon />
            </div>

            {
                !hideButtons ? (
                    <div className="search_buttons">
                        <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                        <Button variant='outlined'>I'm Feeling Lucky</Button>
                    </div>
                ) :
                    (<div className="search_buttons">
                        <Button className='search_buttons_hidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
                        <Button className='search_buttons_hidden' variant='outlined'>I'm Feeling Lucky</Button>
                    </div>)
            }
        </form>
    )
}

export default SearchBar;