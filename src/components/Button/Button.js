import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    leftIcon,
    rightIcon,
    className,
    children,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';

    const props = {
        to,
        href,
        onClick,
        ...passProps,
    };

    if (to) {
        Comp = Link;
    } else if (href) {
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        rounded,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
