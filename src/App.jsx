import siteLogo from './assets/logo.png'
import './styles/App.css'

function App() {
    // noinspection JSValidateTypes
    return (
        <>

                <div className="nav-bar">
                    <div className="logo">
                        <img src={siteLogo} alt="Crocheted Dream Logo" />
                    </div>
                    <div className="nav-links">
                        <ul className="nav-link">
                            <li><a href={siteLogo}>asdas</a></li>
                            <li><a href={siteLogo}>asdas</a></li>
                            <li><a href={siteLogo}>asdas</a></li>
                            <li><a href={siteLogo}>asdas</a></li>
                            <li><a href={siteLogo}>asdas</a></li>
                        </ul>
                    </div>
                    <div className="logout">
                        <a>Log out</a>
                    </div>
                </div>

            <div className="content-container">
                <div className="content">
                    Hello we are the Crocheted Dream! team and we would like to show you some of our products,
                    we encourage you to contact us and dont be afraid nothing its too difficult for us
                </div>
                <div className="gallery">
                    adasd
                </div>
                <div className="footer">
                </div>
            </div>
            <div className="menu-container">
                <div className="menu">
                    <a className="log-in">
                        <h1>Please log in</h1>
                    </a>
                    <a className="cart">
                        <h1>Your Cart</h1>
                    </a>
                    <label>
                        <input type="text" placeholder="Search.." className="search"/>
                    </label>
                </div>
            </div>
        </>
    )
}

export default App
