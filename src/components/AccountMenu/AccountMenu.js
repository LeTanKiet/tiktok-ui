import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AccountItem from '../AccountItem/AccountItem';
import styles from './AccountMenu.module.scss';

const cx = classNames.bind(styles);

const AccountMenu = ({ data, onItemClick }) => {
    return (
        <div>
            <h3 className={cx('header')}>Accounts</h3>
            {data.map((item) => {
                return (
                    <AccountItem
                        data={item}
                        key={item.id}
                        onClick={onItemClick}
                    />
                );
            })}
        </div>
    );
};

AccountMenu.propTypes = {
    data: PropTypes.array.isRequired,
    onItemClick: PropTypes.func,
};

export default AccountMenu;
