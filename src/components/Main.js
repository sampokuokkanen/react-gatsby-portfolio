import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About me</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            My name is Sampo, and I'm from Finland. Right now I'm working in
            Kyoto doing web devevelopment using CakePHP and Ruby on Rails. I
            have more experience with PHP though, as I also like Laravel quite a
            lot.
          </p>
          <p>Things I have done so far in my 30 years on this Earth:</p>
          <ul>
            <li>Did my civil service at the Presidential Office of Finland</li>
            <li>Studied Chinese and went to university in Taiwan</li>
            <li>Worked as a translator in Japan</li>
          </ul>
          <p>
            And after having played around with programming with some PHP and
            Android apps, I started working as a PHP programmer in January,
            2019. But then I ended up also doing Ruby at work, which is rather
            fun.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            My biggest work thus far has been the employee management system that is use at the company I work for right now. I did this with only
            PHP, JS, and CSS: thinking about it now, it would be so much easier to get everything to work in something like Laravel. But having to write all the SQL queries by hand has really helped me a lot later. 
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact me</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <form
            method="post"
            action="https://formspree.io/sampo.kuokkanen@gmail.com"
          >
            <label>
              Name
              <input type="text" name="name" />
            </label>
            <label>
              Email
              <input type="email" name="_replyto" />
            </label>
            <label>
              Comment
              <input type="text" name="comment" />
            </label>
            <input type="text" name="_gotcha" style={{display: 'none'}} />
            <button type="submit">Send</button>
          </form>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/KuokkanenSampo"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/sampo.kuokkanen"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sampokuokkanen"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
