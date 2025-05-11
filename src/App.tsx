
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./page/header";
import RoutesComponent from "./routes/routes";
import { ContextProvider } from "./components/ContextProvider/ContextProvider";


function App() {
   
  return (
   <BrowserRouter>
      <ContextProvider>
         <Header />
         <RoutesComponent  />
      </ContextProvider>
   </BrowserRouter>
  )
}

export default App;
