import React, { Component } from 'react';
import { withRouter } from "react-router";
import './index.scss';
import Language from './components/language';
import RandomColor from './components/randomColor';
import RotateText from './components/rotateText';
import MonochromeMode from './components/monochromeMode';

class MenuComponent extends Component {
    render() {
        const { showMenu } = this.props;
        return (
            <div className={`menu-div ${showMenu ? 'show' : 'hide'}`}>
                <Language />
                <RandomColor />
                <RotateText />
                <MonochromeMode />
            </div>
        )
    }
}

export default withRouter(MenuComponent);