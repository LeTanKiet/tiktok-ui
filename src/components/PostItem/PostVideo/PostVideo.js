import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import {
    FlagIcon,
    PauseIcon,
    PlayIcon,
    VolumeIcon,
    VolumeMuteIcon,
} from '../../Icons';
import styles from './PostVideo.module.scss';

const cx = classNames.bind(styles);

const PostVideo = forwardRef(({ src = '' }, ref) => {
    const [isPlay, setIsPlay] = useState(false);
    const [isMute, setIsMute] = useState(true);
    const [volumeValue, setVolumeValue] = useState(40);

    const videoRef = useRef();
    const volumeRef = useRef();

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

    const handleChangeVolume = (e) => {
        const currentValue = +e.target.value;
        setVolumeValue(currentValue);
        videoRef.current.volume = currentValue / 100;
        if (e.target.value === '0') {
            handleMute();
        } else {
            handleUnmute();
        }
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

            <div className={cx('volume')}>
                <div className={cx('volume-bar-block')}>
                    <input
                        ref={volumeRef}
                        className={cx('volume-bar')}
                        type='range'
                        min={0}
                        max={100}
                        value={volumeValue}
                        onChange={handleChangeVolume}
                    />
                </div>
                {isMute ? (
                    <div className={cx('volume-mute')} onClick={handleUnmute}>
                        <VolumeMuteIcon />
                    </div>
                ) : (
                    <div className={cx('volume-unmute')} onClick={handleMute}>
                        <VolumeIcon />
                    </div>
                )}
            </div>
        </div>
    );
});

PostVideo.propTypes = {
    src: PropTypes.string,
};

export default PostVideo;
