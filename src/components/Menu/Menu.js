import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import Header from './Header';

const cx = classNames.bind(styles);

const Menu = ({ data, children }) => {
    const [multipleTierData, setMultipleTierData] = useState([{ data }]);
    const [currentData, setCurrentData] = useState(multipleTierData[0]);

    return (
        <div>
            <HeadlessTippy
                interactive
                placement='bottom-end'
                delay={[0, 300]}
                offset={[12, 10]}
                render={(attrs) => (
                    <div className={cx('menu')} tabIndex='-1' {...attrs}>
                        {multipleTierData.length > 1 && (
                            <Header
                                title={currentData.title}
                                onBack={() => {
                                    multipleTierData.pop();
                                    setMultipleTierData(multipleTierData);
                                    setCurrentData(
                                        multipleTierData[
                                            multipleTierData.length - 1
                                        ]
                                    );
                                }}
                            />
                        )}
                        <div className={cx('list')}>
                            {currentData.data.map((item, index) => {
                                return (
                                    <Button
                                        key={index}
                                        to={item.to}
                                        leftIcon={item.icon}
                                        className={cx('item', {
                                            separate: item.separate,
                                        })}
                                        rightIcon={item.rightIcon}
                                        onClick={() => {
                                            const isParent = !!item.children;

                                            if (isParent) {
                                                setMultipleTierData([
                                                    ...multipleTierData,
                                                    item.children,
                                                ]);
                                                setCurrentData(item.children);
                                            }
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                )}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
};

Menu.propTypes = {
    data: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
};

export default Menu;
