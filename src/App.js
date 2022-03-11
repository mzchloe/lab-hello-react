import "./App.css";
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="top-header">
          <img className="img-logo" src={logo} alt="logo" />
          <img className="img-menu" src={menu} alt="menu" />
        </div>
        <div className="header-content">
        <h1>Say hello to ReactJS</h1>
        <h4>You will learn how to use the most popular frontend library,
        and become a super Ninja developer</h4>
        </div>
      </header>


    </div>
  );
}

export default App;
