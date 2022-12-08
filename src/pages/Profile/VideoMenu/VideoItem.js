import { useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './VideoMenu.module.scss';
import { PlaySolidIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const VideoItem = ({ data }) => {
    const videoRef = useRef();

    const handleMouseOver = () => {
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        videoRef.current.pause();
    };

    return (
        <div
            className={cx('video-item')}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                src={data.file_url}
                loop
                muted='muted'
                className={cx('video')}
            ></video>
            <p className={cx('description')}>{data.description}</p>
            <div className={cx('views')}>
                <PlaySolidIcon />
                {data.views_count}
            </div>
        </div>
    );
};

export default VideoItem;
