import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { CheckIcon } from '../Icons';
import styles from './AccountItem.module.scss';
import Image from '../Image/Image';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const AccountItem = ({ data, tooltip, small, ...props }) => {
    return (
        <div>
            <HeadlessTippy
                interactive
                delay={[600, 600]}
                placement='bottom-start'
                offset={[0, 0]}
                render={(attrs) => (
                    <div
                        className={cx('account-tooltip', { tooltip })}
                        tabIndex='-1'
                        {...attrs}
                    >
                        <div className={cx('header')}>
                            <Image
                                className={cx('avatar')}
                                src={data.avatar}
                                alt=''
                            />
                            <Button primary>Follow</Button>
                        </div>
                        <div className={cx('content')}>
                            <div>
                                <span className={cx('nickname')}>
                                    {data.nickname}
                                </span>
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
                                <span className={cx('like')}>
                                    {`${data.likes_count}`}{' '}
                                </span>
                                Likes
                            </p>
                        </div>
                    </div>
                )}
            >
                <Link
                    to={`/@${data.nickname}`}
                    className={cx('wrapper', { small })}
                    {...props}
                >
                    <Image className={cx('avatar')} src={data.avatar} alt='' />
                    <div className={cx('content')}>
                        <div>
                            <span className={cx('nickname')}>
                                {data.nickname}
                            </span>
                            {data.tick && <CheckIcon />}
                        </div>
                        <p className={cx('fullname')}>
                            {data.full_name
                                ? data.full_name
                                : `${data.first_name} ${data.last_name}`}
                        </p>
                    </div>
                </Link>
            </HeadlessTippy>
        </div>
    );
};

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    tooltip: PropTypes.bool,
    small: PropTypes.bool,
};

export default AccountItem;
