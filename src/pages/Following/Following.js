import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import followingPage from '~/api/followingPage';
import PostItem from '~/components/PostItem/PostItem';

const Following = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        document.title = `Following - Watch videos from creators you follow | Tiktok`;
    }, []);

    useEffect(() => {
        (async function () {
            const homeData = await followingPage(currentPage);
            setCurrentData(currentData.concat(homeData));
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    const fetchMoreData = () => {
        setCurrentPage((prev) => prev + 1);
    };

    return (
        <InfiniteScroll
            dataLength={currentData.length}
            next={fetchMoreData}
            hasMore={true}
            scrollableTarget='homeScrollable'
        >
            {currentData.map((post) => (
                <PostItem key={post.id} data={post} />
            ))}
        </InfiniteScroll>
    );
};

export default Following;
