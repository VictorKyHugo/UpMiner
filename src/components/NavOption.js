const NavOption = ({ icon, title, toggleActive, isActive }) => {

    return (
        <div onClick={toggleActive} className={isActive ? 'nav-option nav-option--clicked' : 'nav-option'}>
            <div className='nav-option__frame'>
                <span className='nav-option__frame__icon'>{icon}</span>
            </div>
            <span className='nav-option__title'>{title}</span>
        </div>
    )
}

export default NavOption