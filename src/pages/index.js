import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import properteazy from '../assets/images/thumbs/properteazy.png'
import conway from '../assets/images/thumbs/Conway.png'
import sweetheart from '../assets/images/thumbs/sweetheart.png'
import brows from '../assets/images/thumbs/mb.png'

const PROJECTS = [
  {
    id: '1',
    src: 'https://propertymgmt.netlify.com/',
    thumbnail: properteazy,
    caption: 'PropertEAZY',
    description: 'Property Management App',
  },
  {
    id: '2',
    src: 'https://sweetheartshop.netlify.com/',
    thumbnail: sweetheart,
    caption: 'Sweetheart Shop',
    description:
      'E-Commerce website that sells bath and beauty products (WIP).',
  },
  {
    id: '3',
    src: 'https://browsbymonica.com',
    thumbnail: brows,
    caption: 'Brows by Monica',
    description: 'Salon website built for Microblading Boutique LLC',
  },
  {
    id: '4',
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

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={PROJECTS.map(
                ({ id, src, thumbnail, caption, description }) => ({
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
                <form data-netlify="true" name="contact" method="post">
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
