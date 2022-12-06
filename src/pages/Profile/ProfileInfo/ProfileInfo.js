import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Image from '~/components/Image/Image';

import Button from '~/components/Button/Button';
import {
    CheckIcon,
    EllipsisHorizontalIcon,
    LinkIcon,
    ShareIcon,
} from '~/components/Icons';
import ShareMenu from '~/components/ShareMenu/ShareMenu';
import { MENU_ITEM_SHARE } from '~/utils/data';
import styles from './ProfileInfo.module.scss';
import ReportMenu from '../ReportMenu/ReportMenu';

const cx = classNames.bind(styles);

const ProfileInfo = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('personal-info')}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar || ''}
                    alt={data.nickname || ''}
                />
                <div>
                    <h2 className={cx('nickname')}>
                        {data.nickname}
                        {data.tick && (
                            <CheckIcon
                                width='1.8rem'
                                height='1.8rem'
                                className={cx('icon')}
                            />
                        )}
                    </h2>
                    <p
                        className={cx('fullname')}
                    >{`${data.first_name} ${data.last_name}`}</p>
                    <Button primary className={cx('follow-btn')}>
                        Follow
                    </Button>
                </div>
            </div>
            <p className={cx('tiktok-info')}>
                <span>
                    <span className={cx('count')}>{data.followings_count}</span>
                    Following
                </span>
                <span>
                    <span className={cx('count')}>{data.followers_count}</span>
                    Followers
                </span>
                <span>
                    <span className={cx('count')}>{data.likes_count}</span>
                    Likes
                </span>
            </p>
            <p className={cx('bio')}>{data.bio}</p>
            <a
                href={data.website_url}
                className={cx('link')}
                target='_blank'
                rel='noreferrer'
            >
                <LinkIcon />
                {data.website_url}
            </a>

            <ShareMenu data={MENU_ITEM_SHARE}>
                <div className={cx('share-icon')}>
                    <ShareIcon />
                </div>
            </ShareMenu>

            <ReportMenu>
                <div className={cx('ellipsis-icon')}>
                    <EllipsisHorizontalIcon />
                </div>
            </ReportMenu>
        </div>
    );
};

ProfileInfo.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ProfileInfo;
