import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const Menu = ({ data, children }) => {
    const renderData = (attrs) => (
        <div className={cx('menu')} tabIndex='-1' {...attrs}>
            {/* <Header title='Language' /> */}
            <div className={cx('list')}>
                {data.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            to={item.to}
                            leftIcon={item.icon}
                            className={cx('item')}
                        >
                            {item.title}
                        </Button>
                    );
                })}
            </div>
        </div>
    );

    return (
        <HeadlessTippy interactive placement='bottom-end' render={renderData}>
            {children}
        </HeadlessTippy>
    );
};

Menu.propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};

export default Menu;
