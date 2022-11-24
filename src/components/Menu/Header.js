import classNames from 'classnames/bind';
import { BackIcon } from '../Icons/Icons';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Header = ({ title, onBack }) => {
    return (
        <div className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <BackIcon />
            </button>
            <h4 className={cx('title')}>{title}</h4>
        </div>
    );
};

export default Header;
