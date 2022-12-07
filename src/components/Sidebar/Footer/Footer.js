import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = ({ data = [] }) => {
    return (
        <div className={cx('footer')}>
            {data.map((item, index) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a href='#' key={index} className={cx('footer-item')}>
                    {item}
                </a>
            ))}
            <div className={cx('copyright')}>&copy; 2022 TikTok</div>
        </div>
    );
};

Footer.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Footer;
