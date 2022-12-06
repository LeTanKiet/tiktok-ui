import PropTypes from 'prop-types';

import { useState } from 'react';
import images from '~/assets/images';

const Image = ({
    src = '',
    alt = '',
    fallback = images.no_image,
    className = '',
}) => {
    const [_fallback, setFallback] = useState('');

    return (
        <img
            className={className}
            src={_fallback || src}
            alt={alt}
            onError={() => setFallback(fallback)}
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
