import classNames from 'classnames/bind';
import NavMenu from './NavMenu/NavMenu';
import styles from './Sidebar.module.scss';
import suggested from '../../api/suggestedApi';
import { useEffect, useState } from 'react';
import AccountMenu from '../AccountMenu/AccountMenu';

const cx = classNames.bind(styles);

const Sidebar = () => {
    const [suggestedAccounts, setSuggestedAccount] = useState([]);

    useEffect(() => {
        (async function () {
            try {
                const suggestedAccounts = await suggested(1, 5);
                setSuggestedAccount(suggestedAccounts);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <NavMenu />

            <div className={cx('separate')}></div>

            <AccountMenu
                data={suggestedAccounts}
                title='Suggested accounts'
                tooltip
                small
                moreTitle='See All'
            />

            <div className={cx('separate')}></div>

            <AccountMenu
                data={suggestedAccounts}
                title='Following accounts'
                small
                moreTitle='See More'
            />

            <AccountMenu
                data={suggestedAccounts}
                title='Following accounts'
                small
                moreTitle='See More'
            />
        </div>
    );
};

export default Sidebar;
