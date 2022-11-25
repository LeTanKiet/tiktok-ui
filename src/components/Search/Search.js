import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { useEffect, useRef, useState } from 'react';
import useDebounced from '~/hooks/useDebouce';
import AccountItem from '../AccountItem/AccountItem';
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

            fetch(
                `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                    debounced
                )}&type=less`
            )
                .then((res) => res.json())
                .then((res) => {
                    setSearchResult(res.data);
                    setLoading(false);
                });
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
                        <h3 className={cx('result-header')}>Accounts</h3>
                        {searchResult.map((item) => {
                            return (
                                <AccountItem
                                    data={item}
                                    key={item.id}
                                    onClick={handleMoveToProfile}
                                />
                            );
                        })}
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
