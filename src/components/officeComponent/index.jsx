import React, { Component } from 'react';
import { withRouter } from "react-router";
import OfficeBoxComponent from './officeComponent';
import locationServices from '../../services/locationServices'
import Row from 'react-bootstrap/Row';

class OfficeComponent extends Component {
    state = {
        location: [],
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        locationServices.get().then(({ data: response }) => {
            this.setState({
                location: response
            })
        }).catch(err => {
            console.log('err', err);
        })
    }
    
    render() {
        const { location } = this.state;
        return (
            <Row className="office-div" xs={1} sm={3} md={4} lg={5}>
                {
                    location.map((element) =>
                        <OfficeBoxComponent key={element.id} element={element} />
                    )
                }
            </Row>
        )
    }
}

export default withRouter(OfficeComponent);