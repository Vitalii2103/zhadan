import Header from "../components/common/Header";
import RightSideMenu from "../components/common/RightSideMenu";
import LeftSide from "../components/LeftSide/LeftSide";
import Poster from "../components/Poster/Poster";
import Bio from "../components/Bio/Bio";

function Biography() {
    const title = 'Біографія';

    return (
        <>
            <Header title={title} />
            <div className="main flex-container">
                <LeftSide />
                <div className="right-side">
                    <Poster />
                    <RightSideMenu  />
                    <Bio />
                </div>
            </div>
        </>
    );
}

export default Biography
