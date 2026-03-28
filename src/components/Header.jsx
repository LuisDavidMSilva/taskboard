import logo from '../assets/taskboard_logo.png'
function Header() {
    return (
    <header>
        <div className="logo-container">
            <img src={logo} className="logo" />
            <span>Taskboard</span>
        </div>
        <div className="avatar">LD</div>
    </header>
    )
}

export default Header