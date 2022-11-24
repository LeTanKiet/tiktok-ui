import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import config from '~/config';
import Button from '../Button/Button';
import {
    EllipsisVerticalIcon,
    KeyboardIcon,
    LanguageIcon,
    MoonIcon,
    QuestionIcon,
    UploadIcon,
} from '../Icons/Icons';
import Search from '../Search/Search';
import styles from './Header.module.scss';
import Menu from '../Menu/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <MoonIcon />,
        title: 'Darkmode',
    },
];

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button leftIcon={<UploadIcon />} outline>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>

                    <Menu data={MENU_ITEMS}>
                        <div className={cx('more-btn')}>
                            <EllipsisVerticalIcon />
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;
