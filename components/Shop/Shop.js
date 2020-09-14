import Product from "./src/Product";

const productsData = [
    {
        id: '1',
        title: 'Ворошиловград',
        description: '«Ворошиловград» — твір жорсткий, меланхолійний та реалістичний. Вони приходять і забирають у тебе все, що тобі належить. Вони позбавляють тебе твоєї свободи й твоєї території. Вони забирають у тебе твоє минуле і твою пам’ять. І все, що ти можеш їм протиставити – це свою любов і свою ненависть. Ну, і свої кримінальні навички. Історії українського рейдерства присвячується.',
        images: [
            'https://upload.wikimedia.org/wikipedia/uk/3/33/Zhadan_2010.JPG',
        ],
    }
];

function Shop() {
    return (
        <>
            {productsData.map((data, index) => (
                <Product data={data} index={index} key={data.id} />
            ))}
        </>
    );
}

export default Shop;
