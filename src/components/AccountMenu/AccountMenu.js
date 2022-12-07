import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem/AccountItem';
import styles from './AccountMenu.module.scss';

const cx = classNames.bind(styles);

const AccountMenu = ({
    data = [],
    title = '',
    small = false,
    moreTitle = '',
    tooltip = false,
    sidebar = false,
    className = '',
    onItemClick,
}) => {
    const [isAll, setIsAll] = useState(false);

    const onSeeAll = () => {
        setIsAll(true);
    };

    const onSeeLess = () => {
        setIsAll(false);
    };

    return (
        <div className={cx(className, 'wrapper', { sidebar })}>
            <h3 className={cx('header')}>{title}</h3>
            {data.map((item) => {
                return (
                    <AccountItem
                        data={item}
                        key={item.id}
                        small={small}
                        tooltip={tooltip}
                        sidebar={sidebar}
                        onClick={onItemClick}
                    />
                );
            })}
            {moreTitle &&
                (isAll ? (
                    <div className={cx('see-less')} onClick={onSeeLess}>
                        See less
                    </div>
                ) : (
                    <div className={cx('see-all')} onClick={onSeeAll}>
                        See all
                    </div>
                ))}
        </div>
    );
};

AccountMenu.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    small: PropTypes.bool,
    moreTitle: PropTypes.string,
    tooltip: PropTypes.bool,
    sidebar: PropTypes.bool,
    className: PropTypes.string,
    onItemClick: PropTypes.func,
};

export default AccountMenu;
