import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'
const Header = (props) => (
    
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
            <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About me</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Portfolio</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Contact</a></li>
            </ul>
        </nav>
        <div className="content">
            <div className="inner">
                <h1>Sampo Kuokkanen</h1>
                <Typist cursor={{ show: false }}><p>Web dev in Japan. <br />Usually PHP and Rails, but love React.</p>
                </Typist>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
