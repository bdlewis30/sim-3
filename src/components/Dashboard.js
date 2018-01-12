import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../ducks/users';

class Dashboard extends Component {

    //39C, 44E
    componentDidMount() {
        this.props.getUserInfo()
    }
// 43G, 38D
    render() {
        const user = this.props.user
        return (
            <div>
                <h1>{user}</h1> 
            </div>
        )
    }
}
//43H
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
//43C
export default connect(mapStateToProps, {getUserInfo} )(Dashboard);
