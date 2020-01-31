import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MenuUtama from "./Pages/MenuUtama";
import MenuProduct from "./Pages/MenuProduct";
import MenuTentangKami from "./Pages/MenuTentangKami";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuTentangKami />
        <Footer />
      </div>
    );
  }
}

export default App;
