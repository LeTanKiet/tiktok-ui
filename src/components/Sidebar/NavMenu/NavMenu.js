import classNames from 'classnames/bind';
import {
    FollowingFillIcon,
    FollowingIcon,
    HomeFillIcon,
    HomeIcon,
    LiveIcon,
} from '~/components/Icons';
import config from '~/config';
import NavMenuItem from './NavMenuItem';
import styles from './NavMenu.module.scss';

const cx = classNames.bind(styles);

const NavMenu = () => {
    return (
        <div className={cx('nav-menu')}>
            <NavMenuItem
                nav={config.routes.home}
                title='For You'
                icon={<HomeIcon />}
                fillIcon={<HomeFillIcon />}
            />
            <NavMenuItem
                nav={config.routes.following}
                title='Following'
                icon={<FollowingIcon />}
                fillIcon={<FollowingFillIcon />}
            />
            <NavMenuItem
                nav={config.routes.live}
                title='LIVE'
                icon={<LiveIcon width='3.2rem' height='3.2rem' />}
                fillIcon={<LiveIcon width='3.2rem' height='3.2rem' />}
            />
        </div>
    );
};

export default NavMenu;
