import PropTypes from 'prop-types';
import { useRef } from 'react';

import images from '~/assets/images';

const Image = ({
    src = '',
    alt = '',
    fallback = images.no_image,
    className = '',
}) => {
    const imageRef = useRef();

    const handleError = () => {
        if (imageRef.current) {
            imageRef.current.src = fallback;
        }
    };

    return (
        <img
            ref={imageRef}
            className={className}
            src={src}
            alt={alt}
            onError={handleError}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    fallback: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
