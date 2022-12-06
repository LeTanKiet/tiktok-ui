import classNames from 'classnames/bind';

import Header from '~/components/Header/Header';
import Sidebar from '~/components/Sidebar/Sidebar';
import styles from './FullscreenLayout.module.scss';

const cx = classNames.bind(styles);

const FullscreenLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header full />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')} id='homeScrollable'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FullscreenLayout;
