import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';
import {IoLanguage} from 'react-icons/io5';
import log from '../assets/logo ELIKIA  bleu ciel.png'

export default function Navbar() {
  return (
    <nav>
    <div className='icon'>
      <img src={log} alt="" />
    </div>
    <div className='items'>
      <ul>
        <li>
          <NavLink 
            to={'/'} 
            className='link'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/about'} 
            className='link'
          >
           About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/our-programs'} 
            className='link'
          >
            Our Programs 
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/get-involved'} 
            className='link'
          >
            Get Involved 
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/way-to-give'} 
            className='link'
          >
           Ways to Give
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/donate'} 
            className='link'
          >
           Donate
          </NavLink>
        </li>
      </ul>
    </div>
    <div className='lang'>
      <span>
        <IoLanguage />
        <select name="" id="">
          <option value="">
            FR
          </option>
          <option value="">
            EN
          </option>
        </select>
      </span>
    
    </div>
  </nav>
  )
}
