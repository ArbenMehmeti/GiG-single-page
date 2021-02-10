import React, { Component } from 'react';
import { withRouter } from "react-router";
import './index.scss';
import Col from 'react-bootstrap/Col';

class OfficeBoxComponent extends Component {
    render() {
        const { element } = this.props;
        return (
            <Col className="office-div_" >
                <div>
                    <img src="./assets/img/placeholder.svg" alt="" />
                    <span className={`first`}>{element.country}</span>
                </div>
                <span className={`second`}>{element.address}</span>
            </Col>
        )
    }
}

export default withRouter(OfficeBoxComponent);