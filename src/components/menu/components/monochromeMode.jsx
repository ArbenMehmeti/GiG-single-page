import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { actions as toggleActions } from "../../../store/sagas/app/monochrome";

class MonochromeMode extends Component {
    render() {
        const { monochrome, monochromeValue } = this.props;
        return (
            <div className={`monochrome`}>
                <input type="checkbox" value={monochromeValue} onClick={() => monochrome()} />
                <label >Monochrome Mode</label>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    monochromeValue: state.app.monochrome.monochrome,
});
const mapDispatchToProps = {
    monochrome: toggleActions.monochrome,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MonochromeMode));