import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <Header>
      <div className="container header_container">
        <h5>Hi!! I am</h5>
        <h1>Haritha Tadepalli</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
      </div>

      <div className="me">
        <img src={ME} alt="me" />
      </div>
    </Header>
  )
}

export default Header