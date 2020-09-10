import React,{Component} from 'react';

//third-party
import  {connect} from 'react-redux';
import {Alert} from '@material-ui/lab';
import {Link} from 'react-router-dom';
//components
import {signup} from '../../store/user';

class Signup extends Component {
    state = {
        name:'',
        email:'',
        password:'',
        phone:'',
        action:'Create account',
        error:'',
        message:''
    };

    componentDidUpdate(prevProps){
        if(this.props.error !== prevProps.error){
            this.setState({error:this.props.error});
        };
        if(this.props.message !== prevProps.message){
            this.setState({message:this.props.message});
        };
    };

    validateEmail = email => {
        //eslint-disable-next-line
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    } 

    onChange = e => this.setState({ [e.target.name] : e.target.value} );

    onSubmit = async e => {
        e.preventDefault();
        this.setState({error:'',message:''});

        //validation of data
        let {name,email,password,phone} = this.state;
        if(!name || !email || !password || !phone) return this.setState({error:'All fields are required'});
        if(!this.validateEmail(email)) return this.setState({error:'Enter a valid email address'});
        if(password.length < 6) return this.setState({error:'Minimum six characters for password is six'});
        if(phone.length !== 9) return this.setState({error:'Use right format for phone number'});
        let data = {name,email,password,phone};

        //send the data to server
        this.setState({action:'Loading....'})
        await this.props.signup(data).catch(console.log);
        if(this.props.error) return this.setState({action:"Create account"});
        return this.setState({
            name:'',email:'',password:'',phone:'',message:this.props.message,action:'Account created'
        });

    };

    render() {
        const {name,email,password,phone,action,error,message} = this.state;
        return (
            <div className="signup-form-component">
                <form onSubmit={this.onSubmit}>
                    {
                        error ? (
                            <div className="form-group">
                                <Alert severity="error">{error}</Alert>
                            </div>
                        ) : null
                    }
                    {
                        message ? (
                            <div className="form-group">
                                <Alert severity="success">{message}</Alert>
                            </div>
                        ) : null
                    }
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={this.onChange}
                        placeholder="Your name e.g John Doe"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
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
                    <>
                    <label htmlFor="phone">Phone number</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">+254</span>
                        </div>
                        <input type="number"
                        className="form-control"
                        name="phone"
                        value={phone}
                        onChange={this.onChange}
                        placeholder="7xxxxxxxx"
                        />
                    </div>
                    </>
                    <div className="form-group text-center mt-2">
                        <input type="submit" className="btn btn-success btn-block" value={action} />
                    </div>
                    <div className="form-group auth-links text-center">
                        <p>
                            Already have an account ? <Link className="auth-link" to="/auth/login">Login here</Link>
                        </p>
                    </div>
                </form>
            </div>
        )
    }


};

const mapToProps = state => ({
    error:state.user.error,
    message:state.user.message
});

const dispatchToProps = {
    signup
};

export default connect(mapToProps,dispatchToProps)(Signup);