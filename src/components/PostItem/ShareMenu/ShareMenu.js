import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { ArrowDownIcon } from '~/components/Icons';
import Button from '../../Button/Button';
import styles from './ShareMenu.module.scss';

const cx = classNames.bind(styles);

const ShareMenu = ({ data, children }) => {
    const [expand, setExpand] = useState(true);
    const [currentData, setCurrentData] = useState(data.slice(0, 5));

    return (
        <div>
            <HeadlessTippy
                interactive
                placement='top-start'
                delay={[0, 300]}
                offset={[-24, 16]}
                onHide={() => {
                    setExpand(true);
                    setCurrentData(data.slice(0, 5));
                }}
                render={(attrs) => (
                    <div className={cx('menu')} tabIndex='-1' {...attrs}>
                        <div className={cx('list')}>
                            {currentData.map((item, index) => {
                                return (
                                    <Button
                                        key={index}
                                        href={item.href}
                                        leftIcon={item.icon}
                                        className={cx('item', {
                                            separate: item.separate,
                                        })}
                                        rightIcon={item.rightIcon}
                                    >
                                        {item.title}
                                    </Button>
                                );
                            })}
                        </div>
                        {expand && (
                            <div
                                className={cx('expand-btn')}
                                onClick={() => {
                                    setExpand(false);
                                    setCurrentData(data);
                                }}
                            >
                                <ArrowDownIcon />
                            </div>
                        )}
                    </div>
                )}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
};

ShareMenu.propTypes = {
    data: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
};

export default ShareMenu;
