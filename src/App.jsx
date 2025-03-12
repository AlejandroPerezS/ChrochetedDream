import siteLogo from './assets/logo.png'
import './styles/App.css'

function App() {


  // noinspection JSValidateTypes
    return (
      <>
          <div className="container">
              <div className="header">
                  <div className="banner">
                      <h1> 50% off your first order</h1>
                  </div>
                  <div className="logo">
                      <img src={siteLogo} alt="Crocheted Dream Logo"/>
                  </div>

                  <div className="menu">
                      <a className="log-in">
                          <h1 className="hide"> Please log in </h1>
                      </a>
                      <a className="cart">
                          <h1 className="hide"> Your Cart </h1>
                      </a>
                      <label>
                          <input type="text" placeholder="Search.." className="search"/>
                      </label>
                  </div>
              </div>
              <div className="content">
              </div>
              <div className="footer">

              </div>

          </div>
      </>
  )
}

export default App
