import React, { Component } from 'react';
import { withRouter } from "react-router";
import './index.scss';
import { connect } from "react-redux";
import Col from 'react-bootstrap/Col';

class BoxComponent extends Component {
    state = {
        randomBgColor: '',
    }

    render() {
        let { randomBgColor } = this.state;
        const { element, randomColor, rotateTextValue } = this.props;
        if (randomColor) {
            randomBgColor = Math.floor(Math.random() * 16777215).toString(16)
        } else {
            randomBgColor = "1C2833"
        }
        return (
            <Col className={`info-div_ ${element?.logo ? 'logo' : ''}`} style={{ backgroundColor: `#${randomBgColor}` }}>
                <span className={`first`} style={{ transform: rotateTextValue ? `rotate(-180deg)` : `rotate(0deg)` }} >{element.title}</span>
                <span className={`second`} style={{ transform: rotateTextValue ? `rotate(-180deg)` : `rotate(0deg)` }}>{element.description}</span>
                {!element?.logo &&
                    <img className={`lang`} src={element.language === 'en' ? "./assets/img/uk.svg" : "./assets/img/sv.svg"} alt="" />
                }
            </Col>
        )
    }
}

const mapStateToProps = (state) => ({
    randomColor: state.app.randomColor.randomColor,
    rotateTextValue: state.app.rotateText.rotateText,
});
export default connect(mapStateToProps, null)(withRouter(BoxComponent));