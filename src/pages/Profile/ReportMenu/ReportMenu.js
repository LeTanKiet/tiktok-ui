import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './ReportMenu.module.scss';
import { BlockIcon, FlagIcon, PaperPlaneIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const ReportMenu = ({ children }) => {
    return (
        <div>
            <HeadlessTippy
                interactive
                placement='bottom-end'
                delay={[0, 300]}
                offset={[0, 16]}
                render={(attrs) => (
                    <div className={cx('menu')} tabIndex='-1' {...attrs}>
                        <div className={cx('menu-item')}>
                            <PaperPlaneIcon width='1.6rem' height='1.6rem' />
                            <span className={cx('title')}>Send message</span>
                        </div>
                        <div className={cx('separate')}></div>
                        <div className={cx('menu-item')}>
                            <FlagIcon />
                            <span className={cx('title')}>Report</span>
                        </div>
                        <div className={cx('separate')}></div>
                        <div className={cx('menu-item')}>
                            <BlockIcon width='1.6rem' height='1.6rem' />
                            <span className={cx('title')}>Block</span>
                        </div>
                    </div>
                )}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
};

ReportMenu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ReportMenu;
