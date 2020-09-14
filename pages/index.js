import Header from "../components/common/Header";
import RightSideMenu from "../components/common/RightSideMenu";
import LeftSide from "../components/LeftSide/LeftSide";
import Poster from "../components/Poster/Poster";
import PostsList from "../components/PostsList/PostsList";

function HomePage() {
    return (
        <>
            <Header />
            <div className="main flex-container">
                <LeftSide />
                <div className="right-side">
                    <Poster />
                    <RightSideMenu active={"posts"} />
                    <PostsList />
                </div>
            </div>
        </>
    );
}

export default HomePage
