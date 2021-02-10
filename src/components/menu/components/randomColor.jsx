import React, { Component } from 'react';
import { withRouter } from "react-router";
import Button from 'react-bootstrap/Button';
import { connect } from "react-redux";
import { actions as toggleActions } from "../../../store/sagas/app/randomColor";

class RandomColor extends Component {
    render() {
        const { randomColor } = this.props;
        return <Button type="button" variant="secondary" onClick={() => randomColor()}>Random Color</Button>;
    }
}

const mapDispatchToProps = {
    randomColor: toggleActions.randomColor,
};
export default connect(null, mapDispatchToProps)(withRouter(RandomColor));