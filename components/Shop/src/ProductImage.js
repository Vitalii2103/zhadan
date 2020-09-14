function ProductImage({ image, active }) {
    const className = active ? 'image' : 'image hide';

    console.log(className);

    return (
        <>
            <div className={className}>
                <img className="responsive-img" src={image}></img>
            </div>
        </>
    );
}

export default ProductImage;
