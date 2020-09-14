import Header from "../components/common/Header";
import RightSideMenu from "../components/common/RightSideMenu";
import LeftSide from "../components/LeftSide/LeftSide";
import Poster from "../components/Poster/Poster";
import Teksty from "../components/Teksty/Teksty";

function Texts() {
    const title = 'Тексти';

    return (
        <>
            <Header title={title} />
            <div className="main flex-container">
                <LeftSide />
                <div className="right-side">
                    <Poster />
                    <RightSideMenu active={"teksty"} />
                    <Teksty />
                </div>
            </div>
        </>
    );
}

export default Texts;
