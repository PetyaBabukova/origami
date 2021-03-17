import style from "./Header.module.css";
import NavigationItem from "./NavigationItem";
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <NavigationItem>{<img src="white-origami-bird.png" alt="white-origami" />}</NavigationItem>
        <NavLink activeClassName={"active-navigation-item"} exact={true} to="/"><NavigationItem>Home</NavigationItem></NavLink>
        <NavLink activeClassName={"active-navigation-item"} exact={true} to="/about"><NavigationItem>About</NavigationItem></NavLink>
        <NavLink activeClassName={"active-navigation-item"} exact={true} to="/contact-us"><NavigationItem>Contact Us</NavigationItem></NavLink>
        <NavLink activeClassName={"active-navigation-item"} exact={true} to="/about/pesho"><NavigationItem>Pesho</NavigationItem></NavLink>
        <NavLink activeClassName={"active-navigation-item"} exact={true} to="/about/gosho"><NavigationItem>Gosho</NavigationItem></NavLink>
        <NavLink activeClassName={"active-navigation-item"} exact={true} to="/about/stamat"><NavigationItem>Stamat</NavigationItem></NavLink>
        <NavLink activeClassName={"active-navigation-item"} exact={true} to="/about/petya"><NavigationItem>Petya</NavigationItem></NavLink>
        <NavLink activeClassName={"active-navigation-item"} exact={true} to="/about/stafan"><NavigationItem>Stefan</NavigationItem></NavLink>
        <NavLink activeClassName={"active-navigation-item"} exact={true} to="/about/stafan-j"><NavigationItem>Bimbi</NavigationItem></NavLink>
        <NavLink activeClassName={"active-navigation-item"} exact={true} to="/about/iva"><NavigationItem>Iva</NavigationItem></NavLink>
        <NavLink activeClassName={"active-navigation-item"} exact={true} to="/about/sofi"><NavigationItem>Sofi</NavigationItem></NavLink>
      </ul>
    </nav>
  )
};

export default Header;


// {/* ul>li.listItem*11>a[href=#]{Going to $} */} shortcut

//previos version, before Navigation Item:
{/* <li className="listItem"><img src="white-origami-bird.png" alt="white-origami" /></li>
<li className="listItem"><a href="#">Going to 1</a></li>
<li className="listItem"><a href="#">Going to 2</a></li>
<li className="listItem"><a href="#">Going to 3</a></li>
<li className="listItem"><a href="#">Going to 4</a></li>
<li className="listItem"><a href="#">Going to 5</a></li>
<li className="listItem"><a href="#">Going to 6</a></li>
<li className="listItem"><a href="#">Going to 7</a></li>
<li className="listItem"><a href="#">Going to 8</a></li>
<li className="listItem"><a href="#">Going to 9</a></li>
<li className="listItem"><a href="#">Going to 10</a></li>
<li className="listItem"><a href="#">Going to 11</a></li> */}


{/* <Link to="/"><NavigationItem>Home</NavigationItem></Link>
<Link to="/about"><NavigationItem>About</NavigationItem></Link>
<Link to="/contact-us"><NavigationItem>Contact Us</NavigationItem></Link>
<Link to="/about/pesho"><NavigationItem>Pesho</NavigationItem></Link>
<Link to="/about/gosho"><NavigationItem>Gosho</NavigationItem></Link>
<Link to="/about/stamat"><NavigationItem>Stamat</NavigationItem></Link>
<Link to="/about/petya"><NavigationItem>Petya</NavigationItem></Link>
<Link to="/about/stafan"><NavigationItem>Stefan</NavigationItem></Link>
<Link to="/about/stafan-j"><NavigationItem>Bimbi</NavigationItem></Link>
<Link to="/about/iva"><NavigationItem>Iva</NavigationItem></Link>
<Link to="/about/sofi"><NavigationItem>Sofi</NavigationItem></Link> */}


{/* <ul>
        <NavigationItem>{<img src="white-origami-bird.png" alt="white-origami" />}</NavigationItem>
        <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/"><NavigationItem>Home</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about"><NavigationItem>About</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/contact-us"><NavigationItem>Contact Us</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/pesho"><NavigationItem>Pesho</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/gosho"><NavigationItem>Gosho</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/stamat"><NavigationItem>Stamat</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/petya"><NavigationItem>Petya</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/stafan"><NavigationItem>Stefan</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/stafan-j"><NavigationItem>Bimbi</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/iva"><NavigationItem>Iva</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/sofi"><NavigationItem>Sofi</NavigationItem></NavLink>
      </ul> */}