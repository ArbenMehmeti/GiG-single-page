import React, { Component } from 'react';
import { withRouter } from "react-router";
import Container from 'react-bootstrap/Container';
import MenuComponent from '../menu';
import InfoComponent from '../infoComponent';
import OfficeComponent from '../officeComponent';
import { connect } from "react-redux";
import './index.scss';

class Home extends Component {
    state = {
        toggleMenu: false,
    }

    handleToggleMenu = () => {
        this.setState({
            toggleMenu: !this.state.toggleMenu
        })
    }

    render() {
        const { toggleMenu } = this.state;
        const { monochromeValue } = this.props;
        return (
            <>
                <div className={`hamburger-button`} onClick={() => this.handleToggleMenu()}>
                    <img src="./assets/img/menu.svg" alt="" />
                </div>
                <MenuComponent showMenu={toggleMenu} />
                <Container fluid style={{ filter: monochromeValue ? `grayscale(100%)` : `grayscale(0%)` }}>
                    <InfoComponent />
                    <OfficeComponent />
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    monochromeValue: state.app.monochrome.monochrome,
});
export default connect(mapStateToProps, null)(withRouter(Home));