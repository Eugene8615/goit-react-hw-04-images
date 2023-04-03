import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../icons/Search-icon.svg'
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css'

const Searchbar = ({ keyWords }) => {
    const [search, setSearch] = useState('')

    const handleSearch = event => {
        setSearch(event.currentTarget.value.toLowerCase())
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (search.trim() === '') {
            return toast.error("Write a keywords for search images")
        }
        keyWords(search);

        setSearch('')
    }


        return  <header className={styles.Searchbar}>
            <form onSubmit={handleSubmit} className={styles.SearchForm}>
                 <button type="submit" className={styles.SearchForm__button}>
                    <SearchIcon width="20" height="20" />
                    <span className={styles.SearchForm__button_label}>Search</span>
                </button>

                <input
                    onChange={handleSearch}
                    className={styles.SearchForm__input}
                    type="text"
                    autoComplete="off"
                    value={search}
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    }


    Searchbar.propTypes = {
        keyWords: PropTypes.func.isRequired,
    }

    export default Searchbar;