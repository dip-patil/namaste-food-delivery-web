import './Title.css'
import {Link} from 'react-router-dom'



const Title=()=> {
  return (
    <div className="header-title">
      <div className="namaste-food-container">
        <p className="namaste-food-name">
          namaste f<span style={{color: "#F59E0B"}}>oo</span>d
        </p>
      </div>

      <div className="routers-title">
        <span
          className="route-title"
        >
          <Link to="/home">Home</Link>
        </span>
        <span
          className="route-title"
        >
          <Link to="/body">Menu</Link>
        </span>
        <span className="route-title">
          <Link to="/about">About Me</Link>
        </span>

        <span
          className="route-title"
        >
          <Link to="/cart">Cart</Link>
        </span>
      </div>
      
            
    </div>
  );
}
export default Title;
