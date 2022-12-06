import axiosClient from './axiosClient';

const profile = async (nickname) => {
    const url = `users/@${nickname}`;
    const response = await axiosClient.get(url);

    return response.data.data;
};

export default profile;
