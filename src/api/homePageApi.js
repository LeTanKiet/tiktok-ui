import axiosClient from './axiosClient';

const homePage = async (page = 1) => {
    const url = 'videos';
    const response = await axiosClient.get(url, {
        params: {
            type: 'for-you',
            page,
        },
    });

    return response.data.data;
};

export default homePage;
