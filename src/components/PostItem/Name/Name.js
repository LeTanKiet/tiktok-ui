import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Name.module.scss';
import AccountItemTooltip from '~/components/AccountMenu/AccountItemTooltip/AccountItemTooltip';

const cx = classNames.bind(styles);

const Name = ({ user = {} }) => {
    return (
        <div>
            <HeadlessTippy
                interactive
                delay={[600, 0]}
                offset={[-72, 40]}
                placement='bottom-start'
                render={(attrs) => (
                    <div tabIndex='-1' {...attrs}>
                        <AccountItemTooltip data={user} visible={true} />
                    </div>
                )}
            >
                <Link to={`/@${user.nickname}`} className={cx('name-field')}>
                    <span className={cx('nickname')}>{user.nickname}</span>
                    <span
                        className={cx('fullname')}
                    >{`${user.first_name} ${user.last_name}`}</span>
                </Link>
            </HeadlessTippy>
        </div>
    );
};

Name.propTypes = {
    user: PropTypes.object.isRequired,
};

export default Name;
