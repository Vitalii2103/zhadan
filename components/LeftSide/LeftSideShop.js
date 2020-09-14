import SocialButtons from './src/buttons'
import RandomText from "./src/random-text";

class LeftSide {
    goToMain() {
        window.location.href = '/';
    }

    render() {
        return (
            <>
                <div className="left-side center-align">
                    <div style={{ cursor:'pointer' }} className="writer-head" onClick={this.goToMain}></div>
                    <h4 className="white-text">Сергій Жадан</h4>
                    <h6 className="grey-text">Поет, прозаїк, есеїст, перекладач.</h6>
                    <SocialButtons />

                    <a href="/biography" className="btn big grey darken-4 waves-effect waves-light" style={{ margin: 'auto 20px' }}>Біографія</a>
                    <a href="/shop" className="btn big grey darken-4 waves-effect waves-light">Магазин</a>
                </div>
            </>
        );
    }
}

export default function () {
    return new LeftSide;
}
