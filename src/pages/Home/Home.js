import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import homePage from '~/api/homePageApi';
import PostItem from '~/components/PostItem/PostItem';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        (async function () {
            const homeData = await homePage(currentPage);
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

export default Home;
