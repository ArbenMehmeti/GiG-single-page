import React, { Component } from 'react';
import { withRouter } from "react-router";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from "react-redux";
import { actions as toggleActions } from "../../../store/sagas/app/language";

class Language extends Component {
    render() {
        const { toggleLanguage } = this.props;
        return (
            <DropdownButton id="dropdown-basic-button" title="Language">
                <Dropdown.Item onClick={() => toggleLanguage('en')}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => toggleLanguage('sv')}>SV</Dropdown.Item>
            </DropdownButton>
        )
    }
}

const mapDispatchToProps = {
    toggleLanguage: toggleActions.toggleLanguage,
};
export default connect(null, mapDispatchToProps)(withRouter(Language));