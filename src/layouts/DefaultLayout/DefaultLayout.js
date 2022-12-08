import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Button from '~/components/Button/Button';
import Header from '~/components/Header/Header';
import Sidebar from '~/components/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout = ({ full = false, children }) => {
    return (
        <div className={cx('wrapper', { full })}>
            <Header full={full} />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')} id='homeScrollable'>
                    {children}
                </div>
            </div>
            <Button outline rounded className={cx('get-app')}>
                Get app
            </Button>
        </div>
    );
};

DefaultLayout.propTypes = {
    full: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
