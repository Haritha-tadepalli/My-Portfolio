import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/haritha-tadepalli/" target="_blank" rel="noreferrer"><BsLinkedin /></a> 
        <a href="https://github.com/Haritha-tadepalli" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
        <a href="https://www.instagram.com/haritha_tadepalli/" target="_blank" rel="noreferrer"><FaInstagramSquare /></a>
    </div>
  )
}

export default HeaderSocials;