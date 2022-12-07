import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import profile from '~/api/profileApi';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import VideoMenu from './VideoMenu/VideoMenu';

const Profile = () => {
    const { nickname } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fullname = `${user.first_name} ${user.last_name}`;
        document.title = `${fullname} (@${nickname}) Tiktok | Watch ${fullname}'s Newest Tiktok videos`;
    }, [nickname, user]);

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
