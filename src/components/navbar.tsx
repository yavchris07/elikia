import { NavLink } from 'react-router-dom';
import '../styles/nav.scss';

export default function Navbar() {
  return (
    <nav>
    <div className='icon'>
       <h4>Elikia</h4>
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
            to={'/apropos'} 
            className='link'
          >
           About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/contact'} 
            className='link'
          >
            Our Programs 
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/contact'} 
            className='link'
          >
            Get Involved 
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/contact'} 
            className='link'
          >
           Ways to Give
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/contact'} 
            className='link'
          >
           Donate
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
  )
}
