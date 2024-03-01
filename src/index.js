import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
let pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: " ",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Fast React Pizza </h1>
    </div>
  );
}
function Menu() {
  const pizzas = [pizzaData];
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>we are still working on our menu. please come back later: </p>
      )}
      {/* <Pizza
        name="pizaa spinacci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="Pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="pizza fungi"
        ingredients=" tomato.mushroom"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  //   if (isOpen) {
  //     // alert("we're currently open");
  //   } //alert(" we're closed");
  //   else
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "we're currently open");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we're open from{openHour}:00 to {closeHour}:00. visit us or order
        online.
      </p>
      <button className="btn">order</button>
    </div>
  );
}

// react v 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App />
  </React.StrictMode>
);
