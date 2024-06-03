/* import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages//Home/Home';
import Productspage from './Pages//Productspage/Productspage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Productspage" element={<Productspage />} />
    </Routes>
  );
};

export default App;
