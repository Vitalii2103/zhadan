import Head from 'next/head'

function ZadanPage() {
    const title = 'Жадан і Собаки';

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
                <script type="text/javascript" src="/js/materialize.min.js" />
                <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
            </Head>
            <div className="main flex-container">
                <div className="left-side center-align">
                    <div className="writer-head"></div>
                    <h4 className="white-text">Сергій Жадан</h4>
                    <h6 className="grey-text">Поет, прозаїк, есеїст, перекладач.</h6>
                    <div style={{ margin: '40px auto' }}>
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
                    <a href="/biography" className="btn big grey waves-effect waves-light darken-4" style={{ margin: 'auto 20px' }}>Біографія</a>
                    <a href="/shop" className="btn big grey darken-4 waves-effect waves-light">Магазин</a>
                   
                    <div className="random-text">
                        Приїхавши до чужого міста на початку літа,
                        відчути, що його шкіра обвітрена і нагріта,
                        побачити, що дощ третій день заливає долину,
                        високу траву і алею – запалену, тополину.

                        Вулиці чужого міста, як чужі книжкові полиці.
                        Між нами насправді ніколи не буде різниці.
                        Буде лише відчуття переходу,
                        відчуття простору, який робить свою роботу.   
                    </div>
                </div>
                <div className="right-side">
                    <div className="wrapper-poster">
                        <div className="poster-text">
                            <div className="poster-text-data">Текст афіші</div>
                        </div>
                    </div>
                    <div className="btn-menu">
                        <a href="/" className="btn big grey waves-effect waves-light darken-4">Стрічка</a>
                        <a href="/monaygram" className="btn big grey waves-effect waves-light darken-4">Лінія Маннергейма</a>
                        <a href="/zadan" className="btn big grey waves-effect waves-light">Жадан і Собаки</a>
                        <a href="/text" className="btn big grey waves-effect waves-light darken-4">Тексти</a>
                    </div>
                    <div id="posts">
                        <div className="post-wrapper">
                            <div className="post post-full">
                            Сергі́й Ві́кторович Жада́н (нар. 23 серпня 1974, м. Старобільськ, Ворошиловградська область, Українська РСР) —
                             український поет, прозаїк, перекладач, громадський активіст, фронтмен гуртів Жадан і Собаки та Лінія Маннергейма. 
                             Автор романів «Депеш Мод», «Ворошиловград», «Месопотамія», «Інтернат», поетичних збірок «Цитатник», «Ефіопія», 
                             «Життя Марії», «Тамплієри», «Антена» та ін. <br /><br />

                            Літературні твори Сергія Жадана одержали численні національні та міжнародні нагороди, були перекладені більше 
                            ніж двадцятьма мовами, зробивши автора одним із найвідоміших сучасних українських письменників. Сергій Жадан є
                             також активним організатором літературного життя України та учасником мультимедійних мистецьких проектів. 2017
                              року він заснував «Благодійний фонд Сергія Жадана».
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default ZadanPage
