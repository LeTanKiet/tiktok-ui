import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/components/Header/Header';
import styles from './HeaderLayout.module.scss';

const cx = classNames.bind(styles);

const HeaderLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
        </div>
    );
};

HeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderLayout;
