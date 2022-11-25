import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { CheckIcon } from '../Icons';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = ({ data, ...props }) => {
    return (
        <a href={`/@${data.nickname}`} className={cx('wrapper')} {...props}>
            <img className={cx('avatar')} src={data.avatar} alt='' />
            <div className={cx('content')}>
                <div>
                    <span className={cx('nickname')}>{data.nickname}</span>
                    {data.tick && <CheckIcon />}
                </div>
                <p className={cx('fullname')}>{data.full_name}</p>
            </div>
        </a>
    );
};

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
