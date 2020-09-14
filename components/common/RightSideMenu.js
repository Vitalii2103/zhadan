const classLists = {
    active: 'btn big grey waves-effect waves-light',
    default: 'btn big grey waves-effect waves-light darken-4'
};

function RightSideMenu({ active }) {
    active = active || '';

    return (
        <>
            <div className="btn-menu">
                <a href="/" className={active === 'posts' ? classLists.active : classLists.default}>Стрічка</a>
                <a href="/linia-mannerheima" className={active === 'linia-mannerheima' ? classLists.active : classLists.default}>Лінія Маннергейма</a>
                <a href="/zhadan-i-sobaky" className={active === 'zhadan-i-sobaky' ? classLists.active : classLists.default}>Жадан і Собаки</a>
                <a href="/teksty" className={active === 'teksty' ? classLists.active : classLists.default}>Тексти</a>
            </div>
        </>
    );
}

export default RightSideMenu;
