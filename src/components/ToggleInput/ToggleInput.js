import classNames from 'classnames/bind';
import styles from './ToggleInput.module.scss';

const cx = classNames.bind(styles);

const ToggleInput = () => {
    return (
        <label htmlFor='input' className={cx('toggle')}>
            <input type='checkbox' id='input' />
            <div className={cx('bar')}>
                <div className={cx('spinner')}></div>
            </div>
        </label>
    );
};

export default ToggleInput;
