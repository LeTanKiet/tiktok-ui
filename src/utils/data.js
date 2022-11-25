import {
    KeyboardIcon,
    LanguageIcon,
    LiveIcon,
    LogoutIcon,
    MoonIcon,
    QuestionIcon,
    SettingIcon,
    TiktokIcon,
    UserIcon,
} from '~/components/Icons';
import config from '~/config';
import ToogleInput from '~/components/ToggleInput/ToggleInput';

export const MENU_ITEMS_NO_USER = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: config.routes.feedback,
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <MoonIcon />,
        title: 'Darkmode',
        rightIcon: <ToogleInput />,
    },
];

export const MENU_ITEMS_USER = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: config.routes.profile,
    },
    {
        icon: <TiktokIcon />,
        title: 'Get coin',
        to: config.routes.coin,
    },
    {
        icon: <LiveIcon />,
        title: 'LIVE Studio',
        to: config.routes.live,
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: config.routes.setting,
    },
    ...MENU_ITEMS_NO_USER,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        separate: true,
    },
];
