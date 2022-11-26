import axiosClient from './axiosClient';

const search = async (q, type = 'less') => {
    const url = 'users/search';
    const response = await axiosClient.get(url, {
        params: {
            q,
            type,
        },
    });

    return response.data;
};

export default search;
