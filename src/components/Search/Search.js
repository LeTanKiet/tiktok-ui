import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { useEffect, useRef, useState } from 'react';
import search from '~/api/searchApi';
import useDebounced from '~/hooks/useDebouce';
import AccountMenu from '../AccountMenu/AccountMenu';
import { ClearIcon, LoadingIcon, SearchIcon } from '../Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounced(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (debounced && !debounced.startsWith(' ')) {
            setShowResult(true);
            setLoading(true);

            const getSearchResult = async () => {
                const response = await search(debounced);

                setSearchResult(response.data);
                setLoading(false);
            };
            getSearchResult();
        } else {
            setSearchResult([]);
            setShowResult(false);
            setLoading(false);
        }
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleMoveToProfile = () => {
        setSearchResult([]);
        setSearchValue('');
    };

    return (
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                placement='bottom'
                render={(attrs) => (
                    <div className={cx('result')} tabIndex='-1' {...attrs}>
                        <AccountMenu
                            data={searchResult}
                            onItemClick={handleMoveToProfile}
                        />
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        type='text'
                        placeholder='Search accounts and videos'
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />

                    {!loading && searchValue && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <ClearIcon />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('loading')}>
                            <LoadingIcon />
                        </button>
                    )}

                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
