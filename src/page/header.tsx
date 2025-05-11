import { Link } from "react-router-dom";
import "../App.css";

function Header() {
   return (
      <header className="header">
         <div className="head-header">
            <div className="text-header">
               <Link to="/" className="retro">Все котики</Link>
               <Link to="/favorites-page" className="retro">Избранные котики</Link>
            </div>
         </div>
      </header>
   );
}

export default Header;
