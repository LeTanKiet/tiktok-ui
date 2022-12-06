import axiosClient from './axiosClient';

const following = async (page = 1) => {
    const url = 'videos';
    const response = await axiosClient.get(url, {
        params: {
            // will update when auth
            type: 'for-you',
            page,
        },
    });

    return response.data.data;
};

export default following;
