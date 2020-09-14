import Header from "../components/common/Header";
import RightSideMenu from "../components/common/RightSideMenu";
import LeftSide from "../components/LeftSide/LeftSide";
import Poster from "../components/Poster/Poster";
import LineOfMannerheim from "../components/LineOfMannerheim/LineOfMannerheim";

function LiniaMannerheima() {
    const title = 'Лінія Маннергейма';

    return (
        <>
            <Header title={title} />
            <div className="main flex-container">
                <LeftSide />
                <div className="right-side">
                    <Poster />
                    <RightSideMenu active={"linia-mannerheima"} />
                    <LineOfMannerheim />
                </div>
            </div>
        </>
    );
}

export default LiniaMannerheima
