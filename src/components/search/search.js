import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import WithRestoService from '../hoc/with-resto-service';
import {ReactComponent as SearchIco} from './search.svg';

import './search.scss';
import ItemPreview from '../item-preview';

class Search extends Component {
    state = {
        items: [],
        term: '',
        searchResult: []
    }

    // Imitation of server, actual request for server should do while typing
    componentDidMount() {
        this.props.RestoService.getMenu()
            .then((items) => {
                this.setState({items})
            })
    }

    onChange = (e) => {
        this.setState({
            term: e.target.value
        })

        this.filterItems();
    }

    filterItems = () => {
        const {term, items} = this.state;

        if (term.length > 0) {
            const lowTerm = term.toLowerCase();

            const filteredItems = items.filter(item => {
                const lowTitle = item.title.toLowerCase();

                return lowTitle.indexOf(lowTerm) !== -1
            });

            this.setState({
                searchResult: filteredItems
            })
        }
    }

    onOpenItemPage = () => {
        this.setState({
            term: ''
        })
    }

    render() {
        const {term, searchResult} = this.state;

        const isSearching = 
            (term && searchResult.length > 0)
            ? <Result items={searchResult} onOpenItemPage={this.onOpenItemPage}/>
            : null 

        return (
            <div className="search">
                <div className="search__header">
                    <input onChange={this.onChange} value={term} className="search__input" placeholder="Search..." name="search-request"/>
                    <button className="search__submit btn btn_no-grad" type="submit">
                        <SearchIco/>
                    </button>
                </div>
                
                { isSearching }
            </div>
        );
    }
};

function Result({items, onOpenItemPage}) {
    return (
        <div className="search__result">
            {
                items.map(item => {
                    return (
                        <Link to={`/menu/${item.id}`} key={item.id} className="search__item" onClick={onOpenItemPage}>
                            <div className="search__img">
                                <ItemPreview item={item}/>
                            </div>

                            <div className="search__title">
                                {item.title}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default WithRestoService(Search);