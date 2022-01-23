import React from 'react';
import logo from '../images/logo-blank.png'; 


function Header() {
   return(
   <div class="header mt-5">
     <img class="logo" src={logo} alt="Logo" />
    <span class='h5 mt-3'> נטע האוזר <br />להתמסר לקצב התינוק</span>
    </div>);
}
export default Header;
