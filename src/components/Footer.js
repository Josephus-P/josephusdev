import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/josueperalta/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Josephus-P"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@_josueperalta"
                className="icon fa-medium"
              >
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:josephusdev@gmail.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Gatsby Starter Strata</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
            <li>Modified by Josue Peralta</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
