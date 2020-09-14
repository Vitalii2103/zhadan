import ProductImage from "./ProductImage";
import { Component } from 'react';

class ProductImages extends Component {
    constructor(images) {
        super(images);
        this.images = images;

        this.state = {
            active: 0
        };
        this.active = 0;

        this.showNext = this.showNext.bind(this);
    }

    showNext() {
        let {active} = this.state;

        this.setState({
            active: (active + 1) === this.images.length ? 0 : (active + 1)
        })
    }

    render() {
        const {active} = this.state;

        return (
            <>
                <div className="images" onClick={this.showNext}>
                    {this.images.map((image, index) => (
                        <ProductImage image={image} active={(index === active)} key={index} />
                    ))}
                    <ul className="dots">
                        {this.images.map((image, index) => (
                            <li className={(index === active ? 'active' : '')}></li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}

export default function ({ images }) {
    return new ProductImages(images);
};
