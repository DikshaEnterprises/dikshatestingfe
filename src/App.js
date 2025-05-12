import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./router/Router";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";


function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppRoutes/>
      <WhatsAppButton/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
