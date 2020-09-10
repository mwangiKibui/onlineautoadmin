import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import {Alert} from '@material-ui/lab';
//components
import {login} from '../../store/user';

class Login extends Component {
    state = {
        email:'',
        password:'',
        action:'Login',
        error:'',
        redirect:false
    };

    componentDidUpdate(prevProps){
        if(this.props.error !== prevProps.error){
            this.setState({error:this.props.error});
        }
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value });

    validateEmail = email => {
        //eslint-disable-next-line
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onSubmit = async e => {
        e.preventDefault();
        this.setState({error:''});

        //validation
        let {email,password} = this.state;
        if(!email || !password) return this.setState({error:'All fields are required'});
        if(!this.validateEmail(email)) return this.setState({error:'Enter a valid email address'});
        let data = {email,password};

        //sending data to server
        this.setState({action:'Loading....'});
        await this.props.login(data).catch(console.log);
        if(this.props.error) return this.setState({action:'Login'});
        return this.setState({email:'',password:'',error:'',redirect:true})

    };

    render () {
        const {email,password,action,error,redirect} = this.state;
        return (
            redirect ? (
                <Redirect exact to="/dashboard" />
            ) : (
                <div className="login-form-component">
                    <form onSubmit={this.onSubmit}>
                        {
                            error ? (
                                <div className="form-group">
                                    <Alert severity="error">{error}</Alert>
                                </div>
                            ) : null
                        }
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={this.onChange}
                            placeholder="Your email address"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                            name="password"
                            className="form-control"
                            value={password}
                            onChange={this.onChange}
                            placeholder="Your password"
                            />
                        </div>
                        <div className="form-group text-center mt-2">
                            <input type="submit" className="btn btn-success btn-block" value={action} />
                        </div>
                        <div className="form-group auth-links text-center">
                            <p>
                                
                                New here?
                                <Link to="/auth/signup" className="auth-link">Create an account</Link>
                                
                             </p>
                            
                        </div>
                    </form>
                </div>
            )
        )
    }
};

const mapToProps = state => ({
    error:state.user.error
});

const dispatchToProps = {
    login
};

export default connect(mapToProps,dispatchToProps)(Login);