import * as React from 'react';
import { History } from 'history';
import { withRouter } from "react-router";

//import { AppContext } from '../model/appContext';

/*type LoginPopupProps = {
    //context : AppContext
    history : History
}

type LoginPopupState = {
    username : string,
    password : string
}*/

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isTeacher: true
        }
/*
        fetch('api/authenticate/')
        .then(response => response.json())
        .then(data => {
            this.setState({ isTeacher: data });
        });*/

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
        this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this);
    }

    handleClose() {
        this.props.history.push({
            pathname: this.state.isTeacher ? '/homeTeacher' : '/homeStudent'
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        //Backend.login(this.state.username, this.state.password).then((result) => {
           // if(result.success) {
             //   this.props.context.onLoginChange(result.user);
                this.handleClose();
           // }
       // }).catch(this.props.context.notificationManagerRef.current.defaultHTTPCatch);*/
    }

    handleOnChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    handleOnChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return <form onSubmit={ this.handleSubmit }>
            <div className="modal show" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Grade Viewer</h5>
                        </div>
                        <div className="modal-body">
                            <p>
                                Please insert your school's account to login
                            </p>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username" onChange={ this.handleOnChangeUsername } required />                
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" onChange={ this.handleOnChangePassword } required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop show" />
        </form>;
    }
}

export const LoginPopup = withRouter(Login);
