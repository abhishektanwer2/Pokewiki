import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => {
  return <div className="bg-dark text-white py-2">
    <div className='d-flex flex-nowrap justify-content-center align-items-center'>
      Made with &nbsp; <span><FontAwesomeIcon icon={faHeart} className='text-danger' /></span>
      &nbsp; using &nbsp; <span><FontAwesomeIcon icon={faReact} className='text-info' /></span>
    </div>
    <div className='mx-auto text-center mt-1'>
      <small>&copy; 2020 <a href='http://karan-shah.github.io/' target='_blank' className='mx-1'>Karan Shah</a>
      & <a href='https://github.com/abhishektanwer2' target='_blank' className='mx-1'>Abhishek Tanwer</a></small>
    </div>
  </div>;
};
export default Footer;
