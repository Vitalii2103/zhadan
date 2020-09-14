import Header from "../components/common/Header";
import RightSideMenu from "../components/common/RightSideMenu";
import LeftSide from "../components/LeftSide/LeftSide";
import Poster from "../components/Poster/Poster";
import ZhadanISobaky from "../components/ZhadanISobaky/ZhadanISobaky";

function ZhadanAndDogs() {
    const title = 'Жадан і Собаки';

    return (
        <>
            <Header title={title} />
            <div className="main flex-container">
                <LeftSide />
                <div className="right-side">
                    <Poster />
                    <RightSideMenu active={"zhadan-i-sobaky"} />
                    <ZhadanISobaky />
                </div>
            </div>
        </>
    );
}

export default ZhadanAndDogs
