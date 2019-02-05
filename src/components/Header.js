import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img
              src={
                'https://media.licdn.com/dms/image/C5603AQGh0ll6Jzyx-w/profile-displayphoto-shrink_200_200/0?e=1554940800&v=beta&t=sHT8KrR6wk6xxpaKSb2m_-awW0xqps1bJFDOYlKYF9w'
              }
              alt=""
            />
          </a>
          <h1>
            <strong>Josue Peralta</strong>
          </h1>
          <p style={{ color: 'white' }}>
            Web Developer that enjoys experimenting with modern web
            technologies. Give me a task and I'll find a way.
          </p>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
