import Head from 'next/head'

function AdminPage() {
    const title = 'Сергій Жадан | Магазин';

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="{title}" key="title" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link type="text/css" rel="stylesheet" href="style/materialize.min.css"  media="screen,projection" />
                <link type="text/css" rel="stylesheet" href="/style/style.css"  media="screen,projection" />
                <link type="text/css" rel="stylesheet" href="/style/style2.css"  media="screen,projection" />
                <script type="text/javascript" src="/js/materialize.min.js" />
                <script type="text/javascript" src="/js/main.js" />
                <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
            </Head>
            <div className="main flex-container">
                <div className="left-side center-align">
                    <div id="shop_logo_wrapper">
                        <div className="shop_username">Вася Пупкін</div>
                        <div id="shop_logo">
                            <img src="https://www.gravatar.com/avatar/d1ad024237b31415b6532ab8fedf8eab?d=monsterid" />
                        </div>
                    </div>
                    <div style={{ marginTop: '0px' }}>
                        <button className="btn big grey darken-4 waves-effect waves-light"><i className="large material-icons left">account_box</i> Авторизація</button>
                    </div>

                    <div className="cart">
                        <div className="cart-slider">
                            <div className="cart-itm">
                                <div className="cart-itm-img" style={{ backgroundImage: 'url(https://bookclub.ua/images/db/goods/d/48548_79721_d.jpg)' }}></div>
                                <div className="cart-itm-heading">Назва</div>
                                <div className="cart-itm-count">Кількість: <span>5</span><span></span></div>
                            </div>
                        </div>
                       
                        <div className="cart-summary">Разом: <span>$100</span></div>
                        <a className="waves-effect waves-light btn-small">ЗАМОВИТИ</a>
                    </div>
                </div>
                <div className="right-side">
                    <div id="shop">
                        <div className="shop-nav">
                            <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Усі товари</a>


                            <ul id='dropdown1' className='dropdown-content'>
                                <li><a href="#!">one</a></li>
                                <li><a href="#!">two</a></li>
                                <li className="divider" tabindex="-1"></li>
                                <li><a href="#!">three</a></li>
                                <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                                <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
                            </ul>
                            <a className="btn">Стрічка</a>
                            <a className="btn">Біографія</a>
                        </div>
                        <div className="shop-container">
                            
                            <div className="shop-itm">
                                <div className="shop-item-img"></div>
                                <div className="shop-item-name">
                                    <span>НАЗВА</span><span>$30</span>
                                </div>
                            </div>
                            
                            <div className="shop-itm">
                                <div className="shop-item-img"></div>
                                <div className="shop-item-name">
                                    <span>НАЗВА</span><span>$30</span>
                                </div>
                            </div>

                            <div className="shop-itm">
                                <div className="shop-item-img"></div>
                                <div className="shop-item-name">
                                    <span>НАЗВА</span><span>$30</span>
                                </div>
                            </div>

                            <div className="shop-itm">
                                <div className="shop-item-img"></div>
                                <div className="shop-item-name">
                                    <span>НАЗВА</span><span>$30</span>
                                </div>
                            </div>

                            <div className="shop-itm">
                                <div className="shop-item-img"></div>
                                <div className="shop-item-name">
                                    <span>НАЗВА</span><span>$30</span>
                                </div>
                            </div>

                            <div className="shop-itm">
                                <div className="shop-item-img"></div>
                                <div className="shop-item-name">
                                    <span>НАЗВА</span><span>$30</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminPage
