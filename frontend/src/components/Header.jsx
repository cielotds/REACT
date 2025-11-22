const Header = ({name, title}) => {
    return(
        <>
            <header className="bg-red-900 p-4 text-white flex justify-between items-center display: flex;">
                <span className="text-2xl font-semibold text-white font-serif flex justify-start">{title}</span>
                <span className="text-2xl font-semibold text-white font-serif">{name}</span>
            </header>
        </>
    )
}

export default Header;