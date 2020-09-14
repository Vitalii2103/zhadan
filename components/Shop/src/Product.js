import ProductImages from "./ProductImages";

function Product({ data, index }) {
    const black = (!(index + 1) % 2) ? ' black' : '';
    const style = `product${black}`

    return (
        <>
            <div className={style} data-id={data.id}>
                <ProductImages images={data.images} />
                <div className="details">
                    <h4 className="white-text left">{data.title}</h4>
                    <div className="grey-text">{data.description}</div>
                    <div className="product-actions">
                        <button className="btn grey darken-2 waves-light waves-effect">
                            <i className="material-icons left">shopping_basket</i> Додати в кошик
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
