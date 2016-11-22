import React from 'react';
import {connect} from 'react-redux';
import styles from './ybpbody.scss';
import Nav from '../super/nav.jsx';

var actions = require('redux/actions');

let Component = React.createClass({
    componentDidMount() {
        this.props.init();
    },

    render() {
        let {tab} = this.props;

        return (
            <div className={styles.bodyBox }>
                <Nav title={tab}></Nav>
                <Fcone></Fcone>


            </div>
        );
    }
});


const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);