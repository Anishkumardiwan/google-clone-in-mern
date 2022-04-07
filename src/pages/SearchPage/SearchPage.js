import React from 'react';
import useGoogleSearch from '../../API_Keys/useGoogleSearch';
import { useThisState } from '../../ContextApi/StateProvider';
import './SearchPage.css';
import Response from '../../API_Keys/response';
import { Link, useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaginationButton from '../../components/PaginationButton/PaginationButton';

const SearchPage = () => {
    // const [{ term }, dispatch] = useThisState();
    // const Search = term;

    const [searchParams, setSearchParams] = useSearchParams();
    const term = searchParams.get('term');
    const start = searchParams.get('start');
    const context = { term, start };
    const { data } = useGoogleSearch(context);

    // Mock Api Call
    // const data = Response;
    // console.log(data);
    return (
        <div className='search_page'>
            <div className="search_page_header">
                <Link to="/">
                    <img className='search_page_logo' src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                </Link>

                <div className="search_page_headerBody">
                    <SearchBar hideButtons />

                    <div className="search_page_options">
                        <div className="search_page_optionsLeft">
                            <div className="search_page_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>

                            <div className="search_page_option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>

                            <div className="search_page_option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>

                            <div className="search_page_option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>

                            <div className="search_page_option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>

                            <div className="search_page_option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>

                        </div>

                        <div className="search_page_optionsRight">
                            <div className="search_page_option">
                                <Link to="/setting">Setting</Link>
                            </div>

                            <div className="search_page_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                term && (
                    <div className="search_page_results">
                        <p className="search_page_resoltCount">
                            About {data?.searchInformation.formattedTotalResults} results
                            ({data?.searchInformation.formattedSearchTime} seconds)
                        </p>

                        {
                            data?.items.map((item , i = 0 ) => (
                                <div key={i} className="search_page_result">
                                    <a className='search_page_resultLink' href={item.link}>
                                        {item.link.slice(0, 8) + item.displayLink} <ExpandMoreIcon />
                                    </a>

                                    <a className='search_page_resultTitle' href={item.link}>
                                        <h2>{item.title}</h2>
                                    </a>

                                    <p className='search_page_resultSnippet'>
                                        {item.snippet}
                                    </p>

                                </div>
                            ))
                        }

                        <div className='pagination_button'>
                            <PaginationButton />
                        </div>

                    </div>
                )
            }

        </div>
    )
}

export default SearchPage;