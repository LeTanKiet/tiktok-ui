import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '../../Button/Button';
import { CheckIcon } from '../../Icons';
import Image from '../../Image/Image';
import styles from './AccountItemTooltip.module.scss';

const cx = classNames.bind(styles);

const AccountItemTooltip = ({ data, visible = false }) => {
    return (
        <div className={cx('tooltip', { visible })}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt='' />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('content')}>
                <div>
                    <span className={cx('nickname')}>{data.nickname}</span>
                    {data.tick && <CheckIcon />}
                </div>
                <p className={cx('fullname')}>
                    {data.full_name
                        ? data.full_name
                        : `${data.first_name} ${data.last_name}`}
                </p>
            </div>
            <div className={cx('info')}>
                <p>
                    <span className={cx('follower')}>
                        {`${data.followers_count}`}{' '}
                    </span>
                    Followers
                </p>
                <p>
                    <span className={cx('like')}>{`${data.likes_count}`} </span>
                    Likes
                </p>
            </div>
        </div>
    );
};

AccountItemTooltip.propTypes = {
    data: PropTypes.object.isRequired,
    visible: PropTypes.bool,
};

export default AccountItemTooltip;
