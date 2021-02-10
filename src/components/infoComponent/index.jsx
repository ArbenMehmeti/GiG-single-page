import React, { Component } from 'react';
import { withRouter } from "react-router";
import BoxComponent from './boxComponent';
import infoServices from '../../services/infoServices';
import logo from '../json/logo.json';
import logoSv from '../json/logoSv.json';
import Row from 'react-bootstrap/Row';
import { connect } from "react-redux";

class InfoComponent extends Component {
    state = {
        info: [],
    }

    componentDidMount() {
        this.getInfo();
    }

    getInfo = () => {
        infoServices.get().then(({ data: response }) => {
            response.splice(4, 0, logo)
            response.splice(10, 0, logoSv)
            this.setState({
                info: response
            })
        }).catch(err => {
            console.log('err', err);
        })
    }

    render() {
        const { info } = this.state;
        const { language } = this.props;
        return (
            <Row className="info-div" xs={1} sm={2} md={3} lg={3}>
                {
                    info.map((element) =>
                        element.language === language &&
                        <BoxComponent key={element.id} element={element} />
                    )
                }
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    language: state.app.language.language,
});
export default connect(mapStateToProps, null)(withRouter(InfoComponent));