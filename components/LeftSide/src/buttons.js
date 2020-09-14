function SocialButtons() {
    return (
        <>
            <div className="btns-main">
                <a className="white-text flow-text" href="https://www.facebook.com/serhiy.zhadan/" target="_blank">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a className="white-text flow-text" href="https://www.instagram.com/serhiy_zhadan" target="_blank" style={{ margin: 'auto 20px' }}>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a className="white-text flow-text" href="https://twitter.com/serhiy_zhadan" target="_blank">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>
            </div>
        </>
    );
}

export default SocialButtons;
