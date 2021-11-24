import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import LoginAdmin from "./components/LoginAdmin";
import HomeList from "./components/Home/HomeList/HomeList";
import AdminPage from "./components/AdminPage/AdminPage/AdminPage";
import UlPage from "./components/UlPage/UlPage/UlPage";
import DetailCard from "./components/UlPage/UlCard/DetailCard/DetailCard";
import { CartProvider } from "react-use-cart";
import Pannier from "./components/UlPage/UlCard/Pannier/Pannier";
import { useState } from "react";
import Header from "./components/UlPage/Header";
import "./index.css";

function App() {
  const [cartItems, setcartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setcartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setcartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setcartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setcartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomeList} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/admin" exact component={LoginAdmin} />
          <Route path="/adminpage" exact component={AdminPage} />

          <CartProvider>
            <Header countCartItems={cartItems.length} />
            <Route path="/ulpage" exact component={UlPage} />
            <Route
              path="/ulpage/:id"
              exact
              render={(props) => <DetailCard onAdd={onAdd} {...props} />}
            />
            <Route
              path="/ulpage/:id/:id"
              exact
              render={(props) => (
                <Pannier
                  onAdd={onAdd}
                  onRemove={onRemove}
                  cartItems={cartItems}
                  {...props}
                />
              )}
            />
          </CartProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
