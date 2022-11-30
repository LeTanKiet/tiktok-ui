import PropTypes from 'prop-types';

const ShareRedditIcon = ({
    width = '2.6rem',
    height = '2.6rem',
    className,
}) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M12 24C5.3736 24 0 18.6264 0 12C0 5.3736 5.3736 0 12 0C18.6264 0 24 5.3736 24 12C24 18.6264 18.6264 24 12 24Z'
            fill='#FF4500'
        ></path>
        <path
            d='M14.5765 14.4872C13.9304 14.4872 13.4036 13.9552 13.4036 13.3027C13.4036 12.6502 13.9304 12.1182 14.5765 12.1182C15.2226 12.1182 15.7494 12.6502 15.7494 13.3027C15.7494 13.9552 15.2226 14.4872 14.5765 14.4872ZM14.7837 16.431C13.9822 17.2381 12.4491 17.3018 11.9989 17.3018C11.5486 17.3018 10.0133 17.2381 9.21409 16.431C9.09478 16.3105 9.09478 16.1173 9.21409 15.9968C9.33341 15.8763 9.52476 15.8763 9.64408 15.9968C10.1484 16.5061 11.2267 16.6879 11.9989 16.6879C12.7688 16.6879 13.8494 16.5061 14.3537 15.9968C14.473 15.8763 14.6643 15.8763 14.7837 15.9968C14.9007 16.1173 14.9007 16.3105 14.7837 16.431ZM8.24381 13.3027C8.24381 12.6502 8.7706 12.1182 9.4167 12.1182C10.0628 12.1182 10.5896 12.6502 10.5896 13.3027C10.5896 13.9552 10.0628 14.4872 9.4167 14.4872C8.7706 14.4872 8.24381 13.9552 8.24381 13.3027ZM19.5 12.1182C19.5 11.202 18.7661 10.4608 17.8588 10.4608C17.4154 10.4608 17.0146 10.6382 16.7197 10.9269C15.5986 10.1085 14.052 9.581 12.3298 9.51962L13.0772 5.96615L15.5198 6.49133C15.5491 7.11881 16.0579 7.61898 16.686 7.61898C17.3343 7.61898 17.8588 7.08926 17.8588 6.43449C17.8588 5.77972 17.3343 5.25 16.686 5.25C16.2244 5.25 15.8305 5.52055 15.6391 5.91159L12.9106 5.32503C12.8341 5.30911 12.7553 5.32275 12.69 5.36595C12.6247 5.40914 12.5797 5.47508 12.5639 5.55237L11.7445 9.45141C11.74 9.47415 11.7445 9.49461 11.7445 9.51735C9.99077 9.56282 8.4149 10.0925 7.27578 10.9224C6.98086 10.6359 6.5824 10.4608 6.14115 10.4608C5.2339 10.4608 4.5 11.2043 4.5 12.1182C4.5 12.7912 4.89847 13.3709 5.47028 13.6301C5.44552 13.7938 5.43201 13.962 5.43201 14.1325C5.43201 16.6834 8.37213 18.75 11.9989 18.75C15.6256 18.75 18.5657 16.6834 18.5657 14.1325C18.5657 13.9643 18.5522 13.7983 18.5275 13.6346C19.097 13.3755 19.5 12.7957 19.5 12.1182Z'
            fill='white'
        ></path>
    </svg>
);

ShareRedditIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
};

export default ShareRedditIcon;
