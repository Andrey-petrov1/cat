import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "../src/routes/routes";
import Header from "./page/header";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <> // тут должен быть контекнт
      <BrowserRouter>
         <Header />
         <RoutesComponent />
      </BrowserRouter>
   </>
);
