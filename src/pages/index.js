import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

import properteazy from '../assets/images/thumbs/properteazy.png'
import conway from '../assets/images/thumbs/Conway.png'
import sweetheart from '../assets/images/thumbs/sweetheart.png'
import brows from '../assets/images/thumbs/mb.png'
import karmachat from '../assets/images/thumbs/karmachat.png'
import todo from '../assets/images/thumbs/yaro-todo.png'
import blog1 from '../assets/images/thumbs/blog1.jpg'
import blog2 from '../assets/images/thumbs/mocha.png'

const PROJECTS = [
  {
    id: '1',
    src: 'https://properteazy.netlify.com/',
    thumbnail: properteazy,
    caption: 'PropertEAZY (Property management app)',
    description:
      'React | Material-UI | Node/Express | PostgreSQL | Stripe Connect | Firebase Auth',
  },
  {
    id: '2',
    src: 'https://karmachat.netlify.com',
    thumbnail: karmachat,
    caption: 'Karma Chat (Real-time messaging app)',
    description:
      'React | Ant Design | Socket.io | Node/Express | PostgreSQL | Firebase Auth',
  },
  {
    id: '3',
    src: 'https://yaro-todo.netlify.com/',
    thumbnail: todo,
    caption: 'Yaro Todo (Todo list app with e2e and unit tests)',
    description:
      'React | Material-UI | Node/Express | PostgreSQL | Firebase Auth | Mocha/Chai | Cypress.io',
  },
  {
    id: '4',
    src: 'https://sweetheartshop.netlify.com/',
    thumbnail: sweetheart,
    caption: 'Sweetheart Shop (WIP) (E-Commerce website)',
    description: 'Gatsby | Bootstrap (Grid) | DatoCMS | Snipcart API',
  },
  {
    id: '5',
    src: 'https://browsbymonica.com',
    thumbnail: brows,
    caption:
      'Brows by Monica (Salon website built for Microblading Boutique LLC)',
    description: 'Gatsby | SASS | Bootstrap/Reactstrap | Square Appointments',
  },
  {
    id: '6',
    src: 'https://jpgameoflife.netlify.com/',
    thumbnail: conway,
    caption: "Conway's Game of Life",
    description: "React rendtion of Conway's Game of Life",
  },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Josue Peralta'
    const siteDescription = ''

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                I enjoy implementing ideas into websites.
                <br />
              </h2>
              <p>
                There is something satisfying about having the skill set to turn
                someone's vision into reality.
              </p>
            </header>
            <p />
          </section>

          <section>
            <h2>Blog Posts</h2>
            <div>
              <div className="row">
                <article className="6u 12u$(xsmall) work-item">
                  <OutboundLink
                    className="image fit thumb"
                    href="https://medium.com/@_josueperalta/using-firebase-auth-with-a-custom-node-js-server-part-1-53bdb622c89a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={blog1} alt="blog post" />
                  </OutboundLink>
                  <OutboundLink
                    href="https://medium.com/@_josueperalta/using-firebase-auth-with-a-custom-node-js-server-part-1-53bdb622c89a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>
                      Using Firebase Auth with a Custom Node.js Server (Part 1)
                    </h3>
                  </OutboundLink>
                  <p>
                    I cover how to setup Firebase Admin and protect your express
                    routes with token verification middleware.
                  </p>
                </article>

                <article className="6u 12u$(xsmall) work-item">
                  <OutboundLink
                    className="image fit thumb"
                    href="https://medium.com/@_josueperalta/using-firebase-auth-with-a-custom-node-js-server-part-2-cad0369949ad"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={blog2} alt="blog post" />
                  </OutboundLink>
                  <OutboundLink
                    href="https://medium.com/@_josueperalta/using-firebase-auth-with-a-custom-node-js-server-part-2-cad0369949ad"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>
                      Using Firebase Auth with a Custom Node.js Server (Part 2)
                    </h3>
                  </OutboundLink>
                  <p>
                    I complete the tutorial by showing you how to run tests
                    against your protected server endpoints with Mocha and Chai.
                  </p>
                </article>
              </div>
            </div>
          </section>
          <section id="two">
            <h2>Projects</h2>

            <Gallery
              images={PROJECTS.map(
                ({ src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <div className="row">
              <div className="8u 12u$(small)">
                <form
                  data-netlify="true"
                  name="contact"
                  method="post"
                  action="/?no-cache=1"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <button type="submit">Submit</button>
                    </li>
                  </ul>
                </form>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Greater Chicago Area
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:josephusdev@gmail.com">
                      josephusdev@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
