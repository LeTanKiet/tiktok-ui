import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { CheckIcon } from '../../Icons';
import styles from './AccountItem.module.scss';
import Image from '../../Image/Image';
import { Link } from 'react-router-dom';
import AccountItemTooltip from '../AccountItemTooltip/AccountItemTooltip';

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
                    <div tabIndex='-1' {...attrs}>
                        <AccountItemTooltip data={data} visible={!!tooltip} />
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
