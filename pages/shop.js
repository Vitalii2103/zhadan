import Header from "../components/common/Header";
import Shop from "../components/Shop/Shop";
import LeftSideShop from "../components/LeftSide/LeftSideShop";

function ShopPage() {
    const title = 'Магазин';

    return (
        <>
            <Header title={title} />
            <div className="main flex-container">
                <LeftSideShop />
                <div className="right-side">
                    <Shop />
                </div>
            </div>
        </>
    );
}

export default ShopPage;
