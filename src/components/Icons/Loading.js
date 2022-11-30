import PropTypes from 'prop-types';

const LoadingIcon = ({ width = '1.6rem', height = '1.6rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox='0 0 48 48'
        fill='rgba(22, 24, 35, .34)'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M24 12.5C17.6487 12.5 12.5 17.6487 12.5 24C12.5 30.3513 17.6487 35.5 24 35.5C26.8172 35.5 29.3919 34.4902 31.3919 32.8101C32.4491 31.9219 34.026 32.059 34.9142 33.1161C35.8023 34.1733 35.6653 35.7503 34.6081 36.6384C31.741 39.0471 28.0369 40.5 24 40.5C14.8873 40.5 7.5 33.1127 7.5 24C7.5 14.8873 14.8873 7.5 24 7.5C33.1127 7.5 40.5 14.8873 40.5 24C40.5 25.3807 39.3807 26.5 38 26.5C36.6193 26.5 35.5 25.3807 35.5 24C35.5 17.6487 30.3513 12.5 24 12.5Z'
        ></path>
    </svg>
);

LoadingIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
};

export default LoadingIcon;
