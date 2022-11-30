import {
    HashTagIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveIcon,
    LogoutIcon,
    MoonIcon,
    MusicIcon,
    QuestionIcon,
    SettingIcon,
    ShareCopyLinkIcon,
    ShareEmailIcon,
    ShareEmbedIcon,
    ShareFacebookIcon,
    ShareLineIcon,
    ShareLinkedInIcon,
    ShareMessageIcon,
    SharePinterestIcon,
    ShareRedditIcon,
    ShareTelegramIcon,
    ShareTwitterIcon,
    ShareWhatappIcon,
    TiktokIcon,
    UserIcon,
} from '~/components/Icons';
import ToogleInput from '~/components/ToggleInput/ToggleInput';
import config from '~/config';

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

export const MENU_ITEM_SHARE = [
    {
        icon: <ShareEmbedIcon />,
        title: 'Embed',
    },
    {
        icon: <ShareMessageIcon />,
        title: 'Send to friends',
    },
    {
        icon: <ShareFacebookIcon />,
        title: 'Share to Facebook',
        href: 'https://www.google.com/',
    },
    {
        icon: <ShareWhatappIcon />,
        title: 'Share to WhatsApp',
        href: 'https://www.google.com/',
    },
    {
        icon: <ShareCopyLinkIcon />,
        title: 'Copy link',
    },
    {
        icon: <ShareTwitterIcon />,
        title: 'Share to Twitter',
        href: 'https://www.google.com/',
    },
    {
        icon: <ShareLinkedInIcon />,
        title: 'Share to LinkedIn',
        href: 'https://www.google.com/',
    },

    {
        icon: <ShareRedditIcon />,
        title: 'Share to Reddit',
        href: 'https://www.google.com/',
    },
    {
        icon: <ShareTelegramIcon />,
        title: 'Share to Telegram',
        href: 'https://www.google.com/',
    },
    {
        icon: <ShareEmailIcon />,
        title: 'Share to Email',
        href: 'https://www.google.com/',
    },
    {
        icon: <ShareLineIcon />,
        title: 'Share to Line',
        href: 'https://www.google.com/',
    },
    {
        icon: <SharePinterestIcon />,
        title: 'Share to Pinterest',
        href: 'https://www.google.com/',
    },
];

export const DISCOVER_LIST = [
    {
        icon: <HashTagIcon />,
        title: 'suthatla',
    },
    {
        icon: <HashTagIcon />,
        title: 'sangsangthaydoi',
    },
    {
        icon: <MusicIcon />,
        title: 'Yêu Đơn Phương Là Gì',
    },
    {
        icon: <MusicIcon />,
        title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
    },
    {
        icon: <HashTagIcon />,
        title: 'mackedoi',
    },
    {
        icon: <MusicIcon />,
        title: 'Thiên Thần Tình Yêu - RICKY STAR',
    },
];

export const FOOTER_LIST = [
    'About',
    'Newsroom',
    'Contact',
    'Careers',
    'ByteDance',
    'TikTok for Good',
    'Advertise',
    'Developers',
    'Transparency',
    'TikTok Rewards',
    'TikTok Browse',
    'TikTok Embeds',
    'Help',
    'Safety',
    'Terms',
    'Privacy',
    'Creator Portal',
    'Community Guidelines',
];
