import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { ClearIcon, LoadingIcon, SearchIcon } from '../Icons/Icons';
import styles from './Search.module.scss';
import AccountItem from '../AccountItem/AccountItem';

const cx = classNames.bind(styles);

const data = {
    id: 2,
    first_name: 'Đào Lê',
    last_name: 'Phương Hoa',
    full_name: 'Đào Lê Phương Hoa',
    nickname: 'hoaahanassii',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    bio: '✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
    tick: true,
    followings_count: 1,
    followers_count: 30,
    likes_count: 1000,
    website_url: 'https://fullstack.edu.vn/',
    facebook_url: '',
    youtube_url: '',
    twitter_url: '',
    instagram_url: '',
    created_at: '2022-05-05 23:10:05',
    updated_at: '2022-05-05 23:11:39',
};

const Search = () => {
    return (
        <HeadlessTippy
            visible={false}
            interactive
            placement='bottom'
            render={(attrs) => (
                <div className={cx('result')} tabIndex='-1' {...attrs}>
                    <h3 className={cx('result-header')}>Accounts</h3>
                    <AccountItem data={data} />
                    <AccountItem data={data} />
                    <AccountItem data={data} />
                    <AccountItem data={data} />
                </div>
            )}
        >
            <div className={cx('search')}>
                <input type='text' placeholder='Search accounts and videos' />

                {false && <ClearIcon className={cx('clear')} />}
                {false && <LoadingIcon className={cx('loading')} />}

                <button
                    className={cx('search-btn')}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
};

export default Search;
