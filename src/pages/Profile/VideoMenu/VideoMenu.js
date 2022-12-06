import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { LockIcon } from '~/components/Icons';

import VideoItem from './VideoItem';
import styles from './VideoMenu.module.scss';

const cx = classNames.bind(styles);

const VideoMenu = ({ nickname, data = [] }) => {
    const [videoActive, setVideoActive] = useState(true);
    const [likedActive, setLikedActive] = useState(false);

    const handleVideoActive = () => {
        setVideoActive(true);
        setLikedActive(false);
    };

    const handleLikedActive = () => {
        setVideoActive(false);
        setLikedActive(true);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span
                    className={cx('header-item', 'videos', {
                        active: videoActive,
                    })}
                    onClick={handleVideoActive}
                >
                    Videos
                </span>
                <span
                    className={cx('header-item', 'liked', {
                        active: likedActive,
                    })}
                    onClick={handleLikedActive}
                >
                    Liked
                </span>
                <div className={cx('line')}></div>
            </header>
            {videoActive && (
                <>
                    <div className={cx('video-body')}>
                        {data.map((item) => (
                            <VideoItem data={item} key={item.id} />
                        ))}
                    </div>
                </>
            )}
            {likedActive && (
                <>
                    <div className={cx('liked-body')}>
                        <LockIcon />
                        <h3 className={cx('liked-header')}>
                            This user's liked videos are private
                        </h3>
                        <p
                            className={cx('liked-description')}
                        >{`Videos liked by ${nickname} are currently hidden`}</p>
                    </div>
                </>
            )}
        </div>
    );
};

VideoMenu.propTypes = {
    nickname: PropTypes.string,
    data: PropTypes.array,
};

export default VideoMenu;
