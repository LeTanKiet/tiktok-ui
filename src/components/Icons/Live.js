import PropTypes from 'prop-types';

const LiveIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox='0 0 48 48'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8 10C5.23858 10 3 12.2386 3 15V33C3 35.7614 5.23858 38 8 38H30C32.7614 38 35 35.7614 35 33V27.2763L43.2879 33.5909C43.8927 34.0516 44.7064 34.1297 45.3876 33.7922C46.0689 33.4548 46.5 32.7603 46.5 32V16C46.5 15.2397 46.0689 14.5452 45.3876 14.2078C44.7063 13.8704 43.8927 13.9484 43.2879 14.4092L35 20.7238V15C35 12.2386 32.7614 10 30 10H8ZM7 15C7 14.4477 7.44772 14 8 14H30C30.5523 14 31 14.4477 31 15V33C31 33.5523 30.5523 34 30 34H8C7.44771 34 7 33.5523 7 33V15ZM42.5 27.9619L37.3001 24.0001L42.5 20.0382V27.9619Z'
        ></path>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M23.7392 23.5425C24.0881 23.7891 24.0867 24.2714 23.7365 24.5164L16.0777 29.8728C15.6364 30.1814 15 29.8934 15 29.3849V18.6151C15 18.1052 15.6396 17.8175 16.0804 18.1291L23.7392 23.5425Z'
        ></path>
    </svg>
);

LiveIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
};

export default LiveIcon;
