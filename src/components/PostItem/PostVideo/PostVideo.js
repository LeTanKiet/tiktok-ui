import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import {
    FlagIcon,
    PauseIcon,
    PlayIcon,
    VolumnIcon,
    VolumnMuteIcon,
} from '../../Icons';
import styles from './PostVideo.module.scss';

const cx = classNames.bind(styles);

const PostVideo = forwardRef(({ src = '' }, ref) => {
    const videoRef = useRef();
    const [isPlay, setIsPlay] = useState(false);
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

    useImperativeHandle(ref, () => ({
        handlePlay,
        handlePause,
    }));

    return (
        <div className={cx('wrapper', { playing: isPlay })}>
            <video
                ref={videoRef}
                className={cx('video')}
                src={src}
                loop
                autoPlay={isPlay}
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
});

PostVideo.propTypes = {
    src: PropTypes.string,
};

export default PostVideo;
