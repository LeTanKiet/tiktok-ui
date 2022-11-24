import Following from '~/pages/Following/Following';
import Home from '~/pages/Home/Home';
import Live from '~/pages/Live/Live';
import NotFound from '~/pages/NotFound/NotFound';
import Profile from '~/pages/Profile/Profile';
import Search from '~/pages/Search/Search';
import Upload from '~/pages/Upload/Upload';
import config from '~/config';
import HeaderLayout from '~/layouts/HeaderLayout/HeaderLayout';

const publicRoutes = [
    { path: config.routes.home, element: Home },
    { path: config.routes.following, element: Following },
    { path: config.routes.upload, element: Upload, layout: HeaderLayout },
    { path: config.routes.profile, element: Profile },
    { path: config.routes.search, element: Search },
    { path: config.routes.live, element: Live, layout: HeaderLayout },
    { path: config.routes.not_found, element: NotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
