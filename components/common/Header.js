import Head from "next/head";

const baseTitle = 'Сергій Жадан';

function Header({ title }) {
    title = title ? `${baseTitle} - ${title}` : baseTitle;
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
        </>
    )
}

export default Header;
