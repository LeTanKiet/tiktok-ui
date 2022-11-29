import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './NavMenu.module.scss';

const cx = classNames.bind(styles);

const NavMenuItem = ({ nav, title, icon, fillIcon }) => {
    const location = useLocation();

    return (
        <NavLink
            to={nav}
            className={(nav) => cx('nav-menu-item', { active: nav.isActive })}
        >
            {location.pathname === nav ? fillIcon : icon}

            <h4 className={cx('nav-menu-title')}>{title}</h4>
        </NavLink>
    );
};

NavMenuItem.propTypes = {
    nav: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    fillIcon: PropTypes.node,
};

export default NavMenuItem;
