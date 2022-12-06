import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = ({ data = [] }) => {
    return (
        <div className={cx('footer')}>
            {data.map((item, index) => (
                <span key={index} className={cx('footer-item')}>
                    {item}
                </span>
            ))}
            <div className={cx('copyright')}>&copy; 2022 TikTok</div>
        </div>
    );
};

Footer.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Footer;
