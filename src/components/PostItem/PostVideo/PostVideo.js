import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import {
    FlagIcon,
    PauseIcon,
    PlayIcon,
    VolumnIcon,
    VolumnMuteIcon,
} from '../../Icons';
import styles from './PostVideo.module.scss';

const cx = classNames.bind(styles);

const PostVideo = ({ src = '' }) => {
    const videoRef = useRef();
    const [isPlay, setIsPlay] = useState(true);
    const [isMute, setIsMute] = useState(true);

    const handlePlay = () => {
        setIsPlay(true);
        videoRef.current.play();
    };

    const handlePause = () => {
        setIsPlay(false);
        videoRef.current.pause();
    };

    const handleMute = () => {
        setIsMute(true);
    };

    const handleUnmute = () => {
        setIsMute(false);
    };

    return (
        <div className={cx('wrapper', { playing: isPlay })}>
            <video
                ref={videoRef}
                className={cx('video')}
                src={src}
                loop
                autoPlay
                muted={isMute}
            />

            <div className={cx('report')}>
                <FlagIcon className={cx('report-icon')} />
                Report
            </div>

            {isPlay ? (
                <div className={cx('pause')} onClick={handlePause}>
                    <PauseIcon />
                </div>
            ) : (
                <div className={cx('play')} onClick={handlePlay}>
                    <PlayIcon />
                </div>
            )}

            {isMute ? (
                <div className={cx('volumn-mute')} onClick={handleUnmute}>
                    <VolumnMuteIcon />
                </div>
            ) : (
                <div className={cx('volumn')} onClick={handleMute}>
                    <VolumnIcon />
                </div>
            )}
        </div>
    );
};

export default PostVideo;
