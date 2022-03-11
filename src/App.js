import "./App.css";
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-header">
          <img className="img-logo" src={logo} alt="logo" />
          <img className="img-menu" src={menu} alt="menu" />
        </div>
        <div className="header-content">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use
            <br />
            the most popular frontend library,
            <br />
            and become a super Ninja developer.
          </p>
        </div>

        <button>Awesome!</button>
      </header>

      <div className="features-container">
        <div className="icon1 box">
          <img className="img-icons" src={icon1} alt="menu" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="icon2 box">
          <img className="img-icons" src={icon2} alt="menu" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="icon3 box">
          <img className="img-icons" src={icon3} alt="menu" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="icon4 box">
          <img className="img-icons" src={icon4} alt="menu" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
