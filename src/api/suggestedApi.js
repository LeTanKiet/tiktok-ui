import axiosClient from './axiosClient';

const suggested = async (page, per_page) => {
    const url = 'users/suggested';
    const response = await axiosClient.get(url, {
        params: {
            page,
            per_page,
        },
    });

    return response.data.data;
};

export default suggested;
