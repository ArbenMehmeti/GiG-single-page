import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import { actions as toggleActions } from "../../../store/sagas/app/rotateText";

class RotateText extends Component {
    render() {
        const { rotateText } = this.props;
        return <Button type="button" variant="secondary" onClick={() => rotateText()}>Rotate Text</Button>;
    }
}

const mapDispatchToProps = {
    rotateText: toggleActions.rotateText,
};
export default connect(null, mapDispatchToProps)(withRouter(RotateText));
