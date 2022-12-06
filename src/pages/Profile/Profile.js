import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import profile from '~/api/profileApi';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import VideoMenu from './VideoMenu/VideoMenu';

const Profile = () => {
    const { nickname } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            const user = await profile(nickname);
            setUser(user);
        })();
    }, [nickname]);

    return (
        <div>
            <ProfileInfo data={user} />
            <VideoMenu nickname={user.nickname} data={user.videos} />
        </div>
    );
};

export default Profile;
