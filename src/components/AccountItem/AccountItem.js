import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { CheckIcon } from '../Icons';
import styles from './AccountItem.module.scss';
import Image from '../Image/Image';

const cx = classNames.bind(styles);

const AccountItem = ({ data, small, ...props }) => {
    return (
        <a
            href={`/@${data.nickname}`}
            className={cx('wrapper', { small })}
            {...props}
        >
            <Image className={cx('avatar')} src={data.avatar} alt='' />
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
    small: PropTypes.bool,
};

export default AccountItem;
