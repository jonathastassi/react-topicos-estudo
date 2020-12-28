import React, { useContext } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { AuthContextType } from '../../../contexts/AuthContextType';
import { authContext } from '../../../contexts/AuthContext';

const Menu = () => {
  const auth = useContext<AuthContextType>(authContext);

  return (
    <nav>
      {auth.user !== "" ? (<React.Fragment><h4>{auth.user}</h4>
        <button onClick={auth.logout} >Logout</button></React.Fragment>) : null}
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/params/123">Param 123</Link>
        </li>
        <li>
          <Link to="/params/gwergergerg">Param gwergergerg</Link>
        </li>
        <li>
          <Link to="/fwieufheowf">NotFound</Link>
        </li>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/private">Private Page</Link>
        </li>
        <li>
          <Link to="/page-with-lazy-component">Page With Lazy Component</Link>
        </li>
        <li>
          <Link to="/page-lazy-one">Page with Lazy one</Link>
        </li>
        <li>
          <Link to="/page-lazy-two">Page with Lazy two</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;