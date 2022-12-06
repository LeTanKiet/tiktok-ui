import PropTypes from 'prop-types';

const BlockIcon = ({ width = '1.6rem', height = '1.6rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 16 16'
    >
        <path
            fill='black'
            fillRule='evenodd'
            d='M4.48 3.994l7.526 7.527A5.333 5.333 0 004.48 3.994zm7.056 8l-7.53-7.53a5.333 5.333 0 007.529 7.529zM3.765 3.75a6 6 0 118.47 8.5 6 6 0 01-8.47-8.5z'
            clipRule='evenodd'
        ></path>
    </svg>
);

BlockIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
};

export default BlockIcon;
