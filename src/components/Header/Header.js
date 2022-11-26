import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import config from '~/config';
import { MENU_ITEMS_NO_USER, MENU_ITEMS_USER } from '~/utils/data';
import Button from '../Button/Button';
import {
    EllipsisVerticalIcon,
    MessageIcon,
    PaperPlaneIcon,
    UploadIcon,
} from '../Icons';
import ActionMenu from '../ActionMenu/ActionMenu';
import Search from '../Search/Search';
import styles from './Header.module.scss';
import store from '~/utils/store';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button
                        leftIcon={<UploadIcon />}
                        to={config.routes.upload}
                        outline
                    >
                        Upload
                    </Button>

                    {store.currentUser ? (
                        <>
                            <div>
                                <Tippy
                                    placement='bottom'
                                    interactive
                                    content='Messages'
                                >
                                    <div className={cx('icon-with-noti')}>
                                        <Link to={config.routes.message}>
                                            <PaperPlaneIcon
                                                className={cx('icon')}
                                            />
                                        </Link>
                                        {/* <div className={cx('notification')}></div> */}
                                    </div>
                                </Tippy>
                            </div>
                            <div>
                                <Tippy
                                    placement='bottom'
                                    interactive
                                    content='Inbox'
                                >
                                    <div className={cx('icon-with-noti')}>
                                        <MessageIcon className={cx('icon')} />
                                        <div className={cx('notification')}>
                                            3
                                        </div>
                                    </div>
                                </Tippy>
                            </div>
                            <ActionMenu data={MENU_ITEMS_USER}>
                                <img
                                    className={cx('avatar')}
                                    src='https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg'
                                    alt='Avatar'
                                ></img>
                            </ActionMenu>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                            <ActionMenu data={MENU_ITEMS_NO_USER}>
                                <div className={cx('more-btn')}>
                                    <EllipsisVerticalIcon />
                                </div>
                            </ActionMenu>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
