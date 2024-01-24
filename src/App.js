import "./App.css";
import "./data.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>FAST REACT PIZZA CO.</h1>
    </div>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 12 && currentHour <= 22;

  const time = new Date().toLocaleTimeString();
  
  return (
    <div className="footer">
      <h3>
        {isOpen ? (
          `We are currently open until 10pm. Current time: ${time}`
        ) : (
          "Sorry, we are currently closed. We open at 12pm."
        )}
      </h3>
    </div>
  );
}



function Menu() {
  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      <p>
        Authentic Italian cuisine, 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      <div className="pizzas">
        <Pizza />
        <Pizza />
      </div>
    </div>
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <img src="./focaccia.jpg" alt="Focaccia Pizza" />
      <div>
        <h3>Focaccia</h3>
        <p>Bread with italian olive oil and rosemary.</p>
        <span>6</span>
      </div>
    </div>
  );
}

export default App;